#include <bits/stdc++.h>

typedef unsigned char	u8;
typedef unsigned short	u16;
typedef unsigned int	u32;
typedef unsigned long long	u64;
typedef signed char	i8;
typedef signed short	i16;
typedef signed int	i32;
typedef signed long	i64;

typedef u32		Elf32_Addr;
typedef u16		Elf32_Half;
typedef u32		Elf32_Off;
typedef i32		Elf32_Sword;
typedef u32		Elf32_Word;

typedef u64		Elf64_Addr;
typedef u16		Elf64_Half;
typedef u64		Elf64_Off;
typedef i32		Elf64_Sword;
typedef u32		Elf64_Word;
typedef i64		Elf64_Sxword;
typedef u64		Elf64_Xword;


typedef struct Elf_Scn Elf_Scn;
typedef struct Scn_Data Scn_Data;


typedef enum {
	ELF_K_NONE = 0,
	ELF_K_AR,
	ELF_K_COFF,
	ELF_K_ELF,
	ELF_K_NUM
} Elf_Kind;

typedef struct {
	char*		ar_name;
	time_t		ar_date;
	long		ar_uid;
	long 		ar_gid;
	unsigned long	ar_mode;
	off_t		ar_size;
	char*		ar_rawname;
} Elf_Arhdr;

struct Elf {
	size_t	e_size;			
	size_t	e_dsize;		
	Elf_Kind	e_kind;			
	char*	e_data;			
	char*	e_rawdata;		
	size_t	e_idlen;		
	int		e_fd;			
	unsigned	e_count;		
		
	Elf*	e_parent;		
	size_t	e_next;			
	size_t	e_base;			
	Elf*	e_link;			
	Elf_Arhdr*	e_arhdr;		
		
	size_t	e_off;			
	Elf*	e_members;		
	char*	e_symtab;		
	size_t	e_symlen;		
	char*	e_strtab;		
	size_t	e_strlen;		
		
	unsigned	e_class;		
	unsigned	e_encoding;		
	unsigned	e_version;		
	char*	e_ehdr;			
	char*	e_phdr;			
	size_t	e_phnum;		
	Elf_Scn*	e_scn_1;		
	Elf_Scn*	e_scn_n;		
	unsigned	e_elf_flags;		
	unsigned	e_ehdr_flags;		
	unsigned	e_phdr_flags;		
		
	unsigned	e_readable : 1;		
	unsigned	e_writable : 1;		
	unsigned	e_disabled : 1;		
	unsigned	e_cooked : 1;		
	unsigned	e_free_syms : 1;	
	unsigned	e_unmap_data : 1;	
	unsigned	e_memory : 1;		
		
	long	e_magic;
};

typedef struct {
	unsigned char	e_ident[16];
	Elf64_Half		e_type;
	Elf64_Half		e_machine;
	Elf64_Word		e_version;
	Elf64_Addr		e_entry;
	Elf64_Off		e_phoff;
	Elf64_Off		e_shoff;
	Elf64_Word		e_flags;
	Elf64_Half		e_ehsize;
	Elf64_Half		e_phentsize;
	Elf64_Half		e_phnum;
	Elf64_Half		e_shentsize;
	Elf64_Half		e_shnum;
	Elf64_Half		e_shstrndx;
} Elf64_Ehdr;


typedef enum {
	ELF_T_BYTE = 0,	
	ELF_T_ADDR,
	ELF_T_DYN,
	ELF_T_EHDR,
	ELF_T_HALF,
	ELF_T_OFF,
	ELF_T_PHDR,
	ELF_T_RELA,
	ELF_T_REL,
	ELF_T_SHDR,
	ELF_T_SWORD,
	ELF_T_SYM,
	ELF_T_WORD,
	ELF_T_SXWORD,
	ELF_T_XWORD,
	ELF_T_VDEF,
	ELF_T_VNEED,
	ELF_T_NUM		
} Elf_Type;

typedef struct {
	void*		d_buf;
	Elf_Type		d_type;
	size_t		d_size;
	off_t		d_off;
	size_t		d_align;
	unsigned		d_version;
} Elf_Data;

struct Scn_Data {
	Elf_Data	sd_data;		
	Scn_Data*	sd_link;		
	Elf_Scn*	sd_scn;			
	char*	sd_memdata;		
	unsigned	sd_data_flags;		
	unsigned	sd_freeme : 1;		
	unsigned	sd_free_data : 1;	
	long	sd_magic;
};

typedef struct {
	Elf64_Word		sh_name;
	Elf64_Word		sh_type;
	Elf64_Xword		sh_flags;
	Elf64_Addr		sh_addr;
	Elf64_Off		sh_offset;
	Elf64_Xword		sh_size;
	Elf64_Word		sh_link;
	Elf64_Word		sh_info;
	Elf64_Xword		sh_addralign;
	Elf64_Xword		sh_entsize;
} Elf64_Shdr;

typedef struct {
	Elf32_Word		sh_name;
	Elf32_Word		sh_type;
	Elf32_Word		sh_flags;
	Elf32_Addr		sh_addr;
	Elf32_Off		sh_offset;
	Elf32_Word		sh_size;
	Elf32_Word		sh_link;
	Elf32_Word		sh_info;
	Elf32_Word		sh_addralign;
	Elf32_Word		sh_entsize;
} Elf32_Shdr;

struct Elf_Scn {
	Elf_Scn*	s_link;			
	Elf*	s_elf;			
	size_t	s_index;		
	unsigned	s_scn_flags;		
	unsigned	s_shdr_flags;		
	Scn_Data*	s_data_1;		
	Scn_Data*	s_data_n;		
	Scn_Data*	s_rawdata;		
	unsigned	s_type;			
	size_t	s_offset;		
	size_t	s_size;			
	unsigned	s_freeme : 1;		
	union {
		Elf64_Shdr	u_shdr64;
		Elf32_Shdr	u_shdr32;
	}		s_uhdr;
	long	s_magic;
};