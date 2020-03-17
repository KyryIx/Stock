#!C:/Python38-32/python.exe

# https://docs.python.org/3/library/os.html#module-os
# https://docs.python.org/3/library/os.path.html
import os
# https://docs.python.org/3/library/sqlite3.html
import sqlite3
# https://docs.python.org/3/library/re.html
import re

path = os.getcwd()
#print( path )

conn = None
cursor = None

filename = path + '\\' + 'patrimony.db3'
if os.path.exists( filename ):
	print( 'Open ' + filename )
	connection = sqlite3.connect( filename )
else:
	filenameTemp = path + '\\' + 'CRUD.sql'
	fp = open( filenameTemp, 'r', encoding='utf-8' )
	print( 'Open file ' + filenameTemp )
	content = fp.read()
	fp.close()
	
	connection = sqlite3.connect( filename )
	cursor = connection.cursor()
	cursor.execute( content )
	print( 'Create ' + filename )
	print( 'Create table in ' + filenameTemp )
	connection.commit()

entries = os.listdir( path )
#print( entries )

print( '' )
cursor = connection.cursor()
for entry in entries:
	filename = path + '\\' + entry
	if os.path.isdir( filename ):
		#print( filename );
		entriesTemp = os.listdir( filename )
		#print( entriesTemp )
		for entryTemp in entriesTemp:
			result = re.match( r'.*\.sql$', entryTemp )
			if result != None:
				filenameTemp = filename + '\\' + entryTemp
				fp = open( filenameTemp, 'r', encoding='utf-8' )
				content = fp.read()
				fp.close()
				print( 'Include contents in file: ' + filenameTemp )
				cursor.execute( content )
				connection.commit()

connection.close()

# https://docs.python.org/3/tutorial/inputoutput.html
# https://docs.python.org/3/library/io.html
# https://docs.python.org/3/library/stdtypes.html