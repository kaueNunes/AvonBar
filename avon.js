/** Author: MKT VIRTUAL
* Version: 1.0 **/
var language;
var avon={
     avonBar:function(){
          colorBg=document.getElementById("avon").style.backgroundColor;
          colorText=document.getElementById("avon").style.color;
          var f=this.language(language);
          var a=document.createElement("div");
          a.style.backgroundColor=colorBg;
          document.body.prependChild=function(g){
               this.insertBefore(g,this.firstChild)
          };
          document.body.prependChild(a);
          a.setAttribute("id","about_avon");
          document.getElementById("about_avon").style.backgroundColor=colorBg;
          for(var d=0;d<=e.length;d++){
               var c=document.getElementById("content_avon").childNodes[d];
               c.style.color=colorText
          }
          var b=document.getElementById("content_avon").getElementsByTagName("img");this.fix(b)
     },
     fix:function(j){
          var f=navigator.appVersion.split("MSIE");
          var g=parseFloat(f[1]);
          if((g>=5.5)&&(document.body.filters)){
               for(var c=0;c<j.length;c++){
                    var d=j[c];
                    var k=d.src.toUpperCase();
                    if(k.substring(k.length-3,k.length)=="PNG"){
                         var l=(d.className)?"class='"+d.className+"' ":"";
                         var b=(d.title)?"title='"+d.title+"' ":"title='"+d.alt+"' ";
                         var h="display:inline-block;"+d.style.cssText;
                              if(d.align=="left"){
                                   h="float:left;"+h
                              }if(d.align=="right"){
                                   h="float:right;"+h
                              }if(d.parentElement.href){
                                   h="cursor:hand;"+h
                              }
                              var a="<span "+e+l+b+' style="width:'+d.width+"px; height:"+d.height+"px;"+h+";filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+d.src+"', sizingMethod='scale');\"></span>";
                              d.outerHTML=a;c=c-1
                         }
                    }
               }
          },
          language:function(g,v){
               arr=new Array();var a,f,d,c,b;switch(g){
                    case"pt":
                    a="<a href='http://www.br.avon.com/' class='avon_icon' target='_blank'><img src='"+v+"/images_bar/avon.gif' alt='Avon'/></a>";
                    arr.push({title_intro:a});
                    break;
               }
               return arr
          },
          init:function(d,j,v,x){
               var g=this.language(j,v);
               language=j;
               var c=document.getElementsByTagName("head")[0];
               var b=document.createElement("link");
               b.type="text/css";
               b.rel="stylesheet";
               b.href=x+"/css_bar/avons_min.css";
               b.media="screen";
               c.appendChild(b);
               if(document.createElement){
                    document.body.prependChild=function(i){
                         this.insertBefore(i,this.firstChild)
                    };
                    var u=document.createElement("div");
                    u.setAttribute("id","border");
                    document.body.prependChild(u);
                    var q=document.createElement("div");
                    q.setAttribute("id","avon");
                    document.body.prependChild(q);
                    q.style.backgroundColor=d;
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
                    m.innerHTML='<a href="http://www.br.avon.com/" class="avon_icon" target="_blank"><img src="'+v+'/images_bar/nossos_sites.gif" alt="Nossos Sites" /></a><a href="http://www.folhetoavon.com.br/" class="avon_icon" target="_blank"><img src="'+v+'/images_bar/folheto_virtual.gif" alt="Folheto Virtual" /></a><a href="http://www.br.avon.com/PRSuite/revender_avon.page" class="avon_icon" target="_blank"><img src="'+v+'/images_bar/revender.gif" alt="Revender" /></a><a href="http://www.br.avon.com/PRSuite/contact_us_main.page?CURR_URL=contact_us_main.page" class="avon_icon" target="_blank"><img src="'+v+'/images_bar/fale_conosco.gif" alt="Fale Conosco" /></a>';
                    r.appendChild(m);
                    r.appendChild(f);
                    var h=m.getElementsByTagName("a");
                    for(var n=h.length-1;n>=0;n--){
                         var l=m.getElementsByTagName("a")[n];
                         var s=l.firstChild;s.setAttribute("class","avon_icob")
                    }
                    var a=document.getElementById("close_avon");
                    var t=document.getElementById("right_avon").getElementsByTagName("img");
                    this.fix(t);
                    var p=document.createElement("p");
                    p.innerHTML=g[0].title_intro;
                    f.appendChild(p);
               }
          }
     };
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         