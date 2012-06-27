Avon Bar
===

Esta é a barra de topo padrão para sites Avon Brasil. Os arquivos devem ser baixados para o servidor do site a ser utilizado e includado conforme instruções do abaixo:
===

* Autor: Mkt Virtual
* Email: mauricio@mktvirtual.com.br
* Versão: 3.0
* Compatibilidade: (IE6, IE7, Firefox > 3.6, Chrome 17+, Safari 5+, Safari IOS)

Download
===

	Baixe a última versão https://github.com/mktvirtual/AvonBar/zipball/master
	Include o arquivo src/js/avonbar.min.js (compressed) ou src/js/avonbar.js (uncompressed) no footer antes de fechar a tag body
	
Inicialize a barra
===

		Exemplo: 
		*	avon.init(http://www.dominio/avonbar/src/css); 
	
Diretório do CSS (parâmetro)
===
		
		O parâmetro pode ser omitido, por padrão a barra buscará o css no CDN.
		*	avon.init();