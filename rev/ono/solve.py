
fixed = 10065931777680461460

flag = b"dice{n0w_w3r3_c0oK1nG_w1"


from pwn import *
from itertools import product

def check(x):
	x = ''.join(x).encode()
	test = flag + x
	if len(test) != 32:
		print("no U", test)
		return
	p = process("./ono")
	p.sendline(test)
	print(test)
	s = None
	while s is None:
		s = p.poll(block=True)

	if s == 0:
		print("\n\n\nFLAAAAGG:")
		print(test)
		exit()

	p.close()


c = {
	't': 'tT7',
	'h': 'hH',
	'a': 'aA4',
	'o': 'oO0',
	'n': 'nN',
	'c': 'cC',
	'k': 'kK',
	'g': 'gG',
	'1': '1Ii',
	'i': 'iI1',
	'!': '!_',
	's': 'sS5',
	'3': '3Ee',
	'e': 'eE3',
}

prods = [
	["t", "h", "_", "g", "a", "s", "!", "}"],
	["t", "h", "_", "o", "i", "l", "!", "}"],
	["t", "h", "_", "o", "n", "o", "!", "}"],
	["t", "h", "_", "o", "Ññ", "o", "}"],
	["t", "h", "_", "t", "h", "a", "t", "}"],
]

for prod in prods:
	pro = []
	for pr in prod:
		if pr in c:
			pro.append(c[pr])
		else:
			pro.append(pr)
	for x in product(*pro):
		check(x)
	
# dice{n0w_w3r3_c0oK1nG_w1tH_g4s!}
