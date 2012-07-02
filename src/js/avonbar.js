/** Author: MKT VIRTUAL
* Version: 1.0 **/
var language;
var avon={
        init:function(d,j,v,pathCss){
                  if (!j && !v && !pathCss) {
                        if (!d){
                              pathCss = 'http://c624840.r40.cf2.rackcdn.com/versao3/src';
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
                  var p=document.createElement("p");
                  p.setAttribute("id","left_avon_itens");
                  p.innerHTML= "<a href='http://www.br.avon.com/' class='logo sprite' target='_blank' rel='external'></a>";
                  f.appendChild(p);
                  m.setAttribute("id","left_avon_itens");
                  m.innerHTML='<a href="http://www.br.avon.com/PRSuite/lista_sites.page" class="sprite nossos_sites" target="_blank" rel="external"></a><a href=" http://www.br.avon.com/PRSuite/pr_ebrochure.page" class="sprite folheto_virtual" target="_blank" rel="external"></a><a href="http://www.br.avon.com/PRSuite/revender_avon.page" class="sprite revender" target="_blank" rel="external"></a><a href="http://www.br.avon.com/PRSuite/contact_us_main.page?CURR_URL=contact_us_main.page" class="sprite fale" target="_blank" rel="external"></a>';
                  r.appendChild(f);
                  f.appendChild(m);
                  var h=m.getElementsByTagName("a");
                  var k=document.createElement("div");
                  k.setAttribute("id","left_avon_itens");
                  k.innerHTML= "<a href='http://www.avonmaquiagem.com.br/simulador/' class='sprite simulador' target='_blank' rel='external'></a>";
                  
                  var l=document.createElement("div");
                  if (navigator.appVersion.indexOf("MSIE 7.") != -1){
                        l.setAttribute("id","left_avon_face_ie");
                        l.innerHTML= "<iframe src='http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.br.avon.com%2FPRSuite%2Fhome_page.page&amp;send=false&amp;layout=standard&amp;width=100&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=35&amp;appId=235365763148251' scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:100px; height:35px;' allowTransparency='true'></iframe>";
                  }else{
                        l.setAttribute("id","left_avon_face");
                        l.innerHTML= "<iframe src='http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.br.avon.com%2FPRSuite%2Fhome_page.page&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;appId=235365763148251' scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:100px; height:21px;' allowTransparency='true'></iframe>";
                  }
                  var y=document.createElement("div");
                  y.setAttribute("id","left_avon_itens");
                  y.innerHTML= "<a href='http://twitter.com/#!/avonbr/' class='twitter' target='_blank' rel='external'></a>";
                  
                  f.appendChild(k);
                  f.appendChild(y);
                  f.appendChild(l);


             }
        }
   };