# -*- coding: utf-8 -*-
# Agradeço a Deus pelo dom do conhecimento

import os
import sys

try:
	path = sys.argv[1] #"/home/papejajr/personal_archives/certificates"
except Exception as e:
	print 'Favor informe o caminho dos certificações'
	exit(0)

folders = os.listdir(path)

certificates = []
for folder in folders:
	certificates.append(os.listdir(path+'/'+folder))

description = list()
for files in certificates:
	for file in files:
		description.append(file.split(' - '))

#print '<!DOCTYPE html><html lang="pt"><head>'
#print '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">'
#print '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>'
#print '<link rel="stylesheet" href="cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">'
#print '<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>'
#print '<script src="cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>'
#print '<script>$(document).ready( function () {$("#myTable").DataTable();} );</script></head>'
#print '<body class="container"><table id="myTable"><table class="table table-hover table-condensed text-center"><thead><tr><th>Visualizar</th><th class="text-center">Ano</th><th class="text-center">Carga Horária</th><th class="text-center">Descrição</th><th class="text-center">Instituição</th></tr></thead><tbody>'

# Ordenation list
key = lambda item: item[1] if len(item) == 4 else None
description.sort(key=key, reverse=True)

for item in description:
	if len(item) == 4:
		print '<tr><td><a href="#" target="_blank" class="btn-default"><i class="fa fa-external-link" aria-hidden="true"></i></a></td><td>{year}</td><td>{workload}</td><td class="text-left">{description}</td><td>{institute}</td></tr>'.format(year = item[1], workload = item[3].partition('.')[0], description = item[2], institute = item[0])

#print '</tbody></table></body></html>'