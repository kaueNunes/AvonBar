/** Author: MKT VIRTUAL
* Version: 1.0 **/
var language;
var avon={
        init:function(d,j,v,pathCss){
			if (!j && !v && !pathCss) {
				if (!d){
					pathCss = 'http://c624840.r40.cf2.rackcdn.com/versao2/src';
				}else{
					pathCss = d;
				} 
			};
             var c=document.getElementsByTagName("head")[0];
             var b=document.createElement("link");
             b.type="text/css";
             b.rel="stylesheet";
             b.href=pathCss+"/css/avonbar.css";
             b.media="screen";
             c.appendChild(b);
             if(document.createElement){
                  document.body.prependChild=function(i){
                       this.insertBefore(i,this.firstChild)
                  };
                  var q=document.createElement("div");
                  q.setAttribute("id","avonbar");
                  document.body.prependChild(q);
                  var r=document.createElement("div");
                  r.setAttribute("id","avon_owner");
                  r.style.margin="0 auto";
                  r.style.position="relative";
                  r.style.width="778px";
                  q.appendChild(r);
                  var f=document.createElement("div");
                  var m=document.createElement("div");
                  f.setAttribute("id","left_avon");
                  m.setAttribute("id","right_avon");
                  m.innerHTML='<a href="http://www.br.avon.com/PRSuite/lista_sites.page" class="sprite nossos_sites" target="_blank" rel="external"></a><a href=" http://www.br.avon.com/PRSuite/pr_ebrochure.page" class="sprite folheto_virtual" target="_blank" rel="external"></a><a href="http://www.br.avon.com/PRSuite/revender_avon.page" class="sprite revender" target="_blank" rel="external"></a><a href="http://www.br.avon.com/PRSuite/contact_us_main.page?CURR_URL=contact_us_main.page" class="sprite fale" target="_blank" rel="external"></a>';
                  r.appendChild(m);
                  r.appendChild(f);
                  var h=m.getElementsByTagName("a");
                  var p=document.createElement("p");
                  p.innerHTML= "<a href='http://www.br.avon.com/' class='logo sprite' target='_blank' rel='external'></a><a href='http://avonmaquiagem.com.br/simulador/' class='sprite simulador' target='_blank' rel='external'></a>";
                  f.appendChild(p);
             }
        }
   };