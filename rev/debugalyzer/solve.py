from data import data

done = {
	0: 'd',
	1: 'i',
	2: 'c',
	3: 'e',
	4: '{', 

	# guessed
	7: 'g',
	12: 's',
	14: '3',
	18: '0',
	20: 'p',
	33: 'p',
	39: '}',
}


def flag():
	back = 0
	string = ''
	for k, v in sorted(done.items()):
		off = k - back - 1
		string += off * ' '
		back = k
		string += v
	return string

def h(n):
	return hex(n)[2:].rjust(2, '0')

i = 0
while i < len(data):
	k = data[i]
	curr = data[i+1]
	op = data[i+2]
	res = data[i+3]
	i += 7
	if op == 0:
		c = chr((res - ord(done[k]) + 256) % 256)
	elif op == 1:
		c = chr((ord(done[k]) - res + 256) % 256)
	elif op == 2:
		print('--', done[k])
		for n in range(256):
			if (ord(done[k]) * n) % 256 == res:
				print(n, chr(n))
				c = chr(n)
				# break
		# else:
		# 	print('problem')
		# print(hex(n))
		# c = chr(n)
	elif op == 3:
		c = chr((ord(done[k]) ^ res) % 256)

	if curr not in done:
		done[curr] = c
		print(i, h(curr), k, op, h(res), c, flag())
	
	if len(done) == 40:
		break


# dice{h1ghly_sp3c_c0mpl14nt_dw4rf_p4rs3r}
