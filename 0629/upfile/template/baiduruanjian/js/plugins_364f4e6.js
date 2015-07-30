define("jquery-plugins/jquery.jqDock",function(){!function(e,t){if(!e.jqDock){var a=1,n=["Top","Right","Bottom","Left"],r=["Major","Minor"],i=[],l=e.map(["ed","Item","Mouse","Label","Filter","Expand","Wrap","List",""],function(e,t){return i[t]="jqDock"+e,"."+i[t]}),o=["JQDOCK","JQDOCK_conv","JQDOCK_li","JQDOCK_list"],s=["mouseenter","mousemove","mouseleave"],d=["docknudge","dockidle","dockfreeze"],c=["Idler","Inactive","Indock","Overdock","Offdock"],f={v:{wh:"height",xy:1,tl:"top",lead:0,trail:2,inv:"h"},h:{wh:"width",xy:0,tl:"left",lead:3,trail:1,inv:"v"}},h=[0,0],p=t.setTimeout,u=function(e){return e.data(o[0])},g=function(){return!1},m=function(t){return e(t).parent().children(l[1]).index(t)},v=function(e,t,a,n){var r={},i=f[a.inv].wh,l=!n||e[a.wh]>t;return r[a.wh]=l?t:e[a.wh],r[i]=l?Math.round(t*e[i]/e[a.wh]):e[i],r},y=function(t,a){return e(t).closest(l[a||0])},k=function(e){var t,a,n={};for(t in e)a=t.match(/^jqdock([A-Z])([a-zA-Z]+)$/),a&&(n[a[1].toLowerCase()+a[2]]=e[t]);return n},w=function(e){var t=parseInt(e,10);return isNaN(t)?0:t},b=function(e,a){for(var n=c[a]?a+1:c.length;n>a&&n--;)e[c[n]]&&(t.clearTimeout(e[c[n]]),e[c[n]]=null)},O=function(){var t,a=e(this),n=a.attr("id")||"",r=a.data(o[1]),l=a.children("li").map(function(){var t=e("img",this).eq(0),a=t.parent("a");return a.length?t.siblings().length?null:a[0]:t.get(0)}),s=n?{id:n}:{};return a.length&&l.length?r?r:(t=a.attr("style"),t&&(s.style=t),t=e("<div/>").addClass(i[7]).data("jqdock",e.extend({},a.data("jqdock"),k(a.data()))).data(o[3],{el:this,attr:s}),a.hide().removeAttr("id"),l.each(function(){e(this).data(o[2],e("<span/>").insertBefore(this)[0]).appendTo(t)}),t.attr("id",n).insertBefore(a),a.data(o[1],t[0]),t[0]):this},j=function(t){var a=e.now(),n=t?t.Stamp+t.Opts.duration:0;return n>a&&(a-=n-a),a},C=function(t){var a,n,r=t.data,i=u(e(r.menu));i&&(a=i.Elem[r.idx],n=i.Opts,n.sizeMax?e.extend(a,v(this,n.sizeMax,f[f[n.vh].inv]),n.capSizing):(a.width=this.width,a.height=this.height),--i.Load||p(function(){e.jqdock.init(r.menu)},0))},I=function(e,t,a){t.Item.toggleClass(i[5],!a),e.Menu.trigger("dockitem",[t.Img[0],!a])},M=function(){e(this).prev("img").triggerHandler("click")},S=function(e,t){var a=e.Elem[e.Current];a&&e.Opts.labels&&!e.Opts.permanentLabels&&a.Label.el.toggle(!!t)},E=function(e){var t,a,n,r,i=f[e.Opts.vh],l=-1,o=h[i.xy]-e.Elem[0].Item.offset()[i.tl];if(o>=0)for(t=0;0>l&&t<e.ElCt;t++)a=e.Elem[t],n=a.Pad[i.lead]+a.Pad[i.trail],r=a.Major+n,r>o?(t!==e.Current&&(S(e),e.Current=t),l=a.Offset+o*(a.Initial+n)/r):o-=r;return l},L=function(e){for(var t,a=e.childNodes.length;a;)t=e.childNodes[--a],(t.childNodes||[]).length?L(t):3===t.nodeType&&e.removeChild(t)},A=function(e){e.css({visibility:"visible"}).show()},x=function(e){var t=e.Opts.idle;t&&(b(e,0),e[c[0]]=p(function(){e.Menu.trigger(d[1])},t))},F=function(e,t){var a,n,r,i,l=e.Opts,o=f[l.vh].wh,s=e.ElCt;for(t=t||0===t?t:E(e);s--;)a=e.Elem[s],r=a.Initial,t>=0&&(n=Math.abs(t-a.Centre),n<l.distance&&(r=a[o]-Math.round((a[o]-a.Initial)*Math.pow(n,l.coefficient)/l.attenuation)),s===e.Current&&(l.noAntiFlutter||(i=[h[f[l.vh].xy],e.Current,r].join(","),i===e.ToFro[0]&&r!==e.ToFro[2]?r=e.ToFro[2]:e.ToFro=[e.ToFro[1],i,r]))),a.Final=r},z=function(e){return e},q=function(t,a,i,l){var o,s,d,c,h,p,u,g,m=t.Elem[a],y=t.Opts,k=t.Yard,b=t.Border,O=f[y.vh],j=f[O.inv],C=y.labels,M=t.Elem[t.Current],E=m.src!==m.altsrc;if(l||m.Major!==i){if(o=e.boxModel||"v"===y.vh?0:b[O.lead]+b[O.trail],l||m.Major!==m.Initial||(E&&(m.Img[0].src=m.altsrc),I(t,m)),t.Spread+=i-m.Major,s=v(m,i,O),d=y.size-s[j.wh],h={middle:1,center:1,top:2,left:2}[y.align]||0,h>1?s["margin"+n[j.trail]]=d:h?(c=Math.round(d*(100-y.bias)/100),s["margin"+n[j.lead]]=d-c,s["margin"+n[j.trail]]=c):s["margin"+n[j.lead]]=d,(i!==m.Major||l&&!a)&&(y.flow&&k.parent()[O.wh](t.Spread+b[O.lead]+b[O.trail]),k[O.wh](t.Spread+o)),m.Wrap.css(s),y.flow||k.css(O.tl,Math.floor(Math.max(0,(t[O.wh]-t.Spread)/2))),t.OnDock){if(M&&C){if(u=M.Label,g=u.el,u.mc){u.mc=0;for(h in f){u[h]=g[f[h].wh]();for(p in{lead:1,trail:1})u[h]+=w(g.css("padding"+n[f[h][p]]))}}"m"===C.charAt(0)&&g.css({top:Math.floor((M[r[j.xy]]-u.v)/2)}),"c"===C.charAt(1)&&g.css({left:Math.floor((M[r[O.xy]]-u.h)/2)})}t.Stamp||S(t,1)}m.Major=i,m.Minor=s[j.wh],l||i!==m.Initial||(E&&(m.Img[0].src=m.src),I(t,m,1)),s=null}},D=function(e){var t,a,n,r,i=e.Opts,l=f[i.vh],o=i.duration+i.step;if(e.Stamp&&(o=j()-e.Stamp,o>=i.duration&&(e.Stamp=0)),o>=i.step){for(r=(i.duration-o)/i.step,t=0;t<e.ElCt;t++)a=e.Elem[t],n=a.Final-a.Major,n=n&&r>1?a.Major+Math[0>n?"floor":"ceil"](n/r):a.Final,q(e,t,n);e.Spread>e[l.wh]&&(e.Yard.parent()[l.wh](e.Spread+e.Border[l.lead]+e.Border[l.trail]),e[l.wh]=e.Spread)}},T=function(e,t){var a=e.Elem,n=a.length;if(b(e,2),e.OnDock&&!e.Stamp){for(F(e,t);n&&a[n-1].Major===a[n-1].Final;)--n;n?(D(e),e[c[2]]=p(function(){T(e,t)},e.Opts.step)):S(e,1)}},B=function(e,t){var a=e.Elem,n=a.length;if(!e.OnDock){for(;n&&a[n-1].Major<=a[n-1].Initial;)--n;if(E(e),n)D(e),e[c[4]]=p(function(){B(e,t)},e.Opts.step);else{for(e.Stamp=0,n=a.length;n--;)a[n].Major=a[n].Final=a[n].Initial;e.Current=-1,t||x(e)}}},W=function(e,t){var a=e.Elem,n=a.length;if(e.OnDock){for(F(e,t);n&&a[n-1].Major===a[n-1].Final;)--n;n&&e.Stamp?(D(e),e[c[3]]=p(function(){W(e,t)},e.Opts.step)):(e.Stamp=0,T(e,t))}},P=function(e,t,a,n){var r=t.Elem,i=r.length;if(0===e&&(t.OnDock=1,t.Current>=0&&t.Current!==a&&S(t),t.Current=a,t.Stamp=n&&n>1?0:j(t),W(t,n?r[a].Centre:null)),1===e&&(a!==t.Current&&(S(t),t.Current=a),T(t)),2===e){for(b(t,1),t.OnDock=0,S(t),t.Stamp=j(t);i--;)r[i].Final=r[i].Initial;B(t,!!n)}},N=function(e){var t,a=u(y(this)),n=m(this),r=-1;a&&(a.Asleep?a.Opts.noBuffer||(a.Doze={El:this,type:e.type,pageX:e.pageX,pageY:e.pageY}):(t=a.OnDock,b(a,0),h=[e.pageX,e.pageY],e.type===s[2]?t?r=2:x(a):(a.Opts.inactivity&&(b(a,1),a[c[1]]=p(function(){P(2,a,n,1)},a.Opts.inactivity)),e.type===s[1]?0>n?t&&a.Current>=0&&(r=2):r=!t||a.Current<0?0:1:n>=0&&!t&&(r=0)),a.Doze=null,r>=0&&P(r,a,n)))},J=function(t){var a,n,r=e(this),i=u(r),l=t.type===d[2],o=l?"freeze":"sleep";i&&(t.type===d[0]?(o=i.Frozen?"thaw":"wake",i.Asleep&&(i.Asleep=i.Opts.onWake.call(this,o)===!1,i.Asleep||(i.Frozen=!r.trigger("dockwake",[o]))),i.Asleep||(x(i),n=i.Doze,n&&N.call(n.El,n))):(b(i,0),a=!i.Asleep||l&&!i.Frozen,a&&i.Opts.onSleep.call(this,o)===!1||(i.Asleep=!b(i,l?-1:1),i.Frozen=i.Frozen||l,a&&r.trigger("docksleep",[o]),l?i.Stamp=i.OnDock=0:P(2,i,0,1))))};e.jqdock=e.jqDock=function(){return{version:"2.0.2",defaults:{size:48,sizeMax:0,capSizing:0,distance:72,coefficient:1.5,duration:300,align:"bottom",labels:0,source:0,loader:0,inactivity:0,fadeIn:0,fadeLayer:"",step:50,setLabel:0,flow:0,idle:0,onReady:0,onSleep:0,onWake:0,noBuffer:0,active:-1,bias:50,noAntiFlutter:0,permanentLabels:0},nextId:0,useJqLoader:!e.browser||e.browser.opera||e.browser.safari,init:function(t){var a,r,o,c,h,p,g,m,k,b,O,j,C=e(t),I=u(C),S=I.Opts,E=f[S.vh],z=f[E.inv],D=I.Border,T=S.fadeLayer,B=S.labels,W=I.ElCt,Y=e("<div/>").css({position:"relative",padding:0}),Q=Y.clone().css({margin:0,border:"0 none",backgroundColor:"transparent"}),K=0,R=0;for(L(t),C.children().each(function(t,a){var n=I.Elem[t].Wrap=e(a).wrap(Q.clone().append(Q.clone())).parent();"h"===S.vh&&n.parent().css("float","left"),e("*",n).css({position:"relative",padding:0,margin:0,borderWidth:0,borderStyle:"none",verticalAlign:"top",display:"block",width:"100%",height:"100%"})});W>R;)g=I.Elem[R++],b=g.Pad,m=v(g,S.size,z,S.capSizing),g.Major=g.Final=g.Initial=m[E.wh],g.Item=g.Wrap.css(m).parent(),g.Img.attr({alt:""}).parent("a").andSelf().removeAttr("title"),I[z.wh]=Math.max(I[z.wh],S.size+b[z.lead]+b[z.trail]),g.Offset=K,g.Centre=K+b[E.lead]+g.Initial/2,K+=g.Initial+b[E.lead]+b[E.trail];for(R=0;W>R;){g=I.Elem[R++],b=g.Pad[E.lead]+g.Pad[E.trail],I.Spread+=g.Initial+b;for(p in{Centre:1,Offset:1}){for(F(I,g[p]),k=0,h=W;h--;)k+=I.Elem[h].Final+b;k>I[E.wh]&&(I[E.wh]=k)}}for(;R;)g=I.Elem[--R],g.Final=g.Initial;for(C.wrapInner(Y.addClass(i[6]).append(Q.attr({id:I.Id,"class":i[8],style:""}).css({position:"absolute",top:0,left:0,padding:0,margin:0,overflow:"visible",height:I.height,width:I.width}))),j=I.Yard=e("#"+I.Id),h=4;h--;)D[h]=w(j.css("border"+n[h]+"Width"));for(O=j.parent().width(I.width+D[1]+D[3]).height(I.height+D[0]+D[2]);W>R;)g=I.Elem[R],b=g.Item.css("padding",g.Pad.join("px ")+"px"),q(I,R,g.Final,!0),b.addClass(i[1]).add(g.Img).addClass(i[2]+R),a=g.Label,a.el=e("<div/>").css({position:"absolute",margin:0}).addClass(i[3]+" "+i[3]+g.Link).insertAfter(g.Img).hide().on("click",M),B&&(r="b"===B.charAt(0),o="r"===B.charAt(1),a.el.css({top:r?"auto":0,left:o?"auto":0,bottom:r?0:"auto",right:o?0:"auto"})),c=S.setLabel.call(t,g.Title,R,a.el[0]),c!==!1&&e("<div/>").addClass(i[3]+"Text").html(c.toString()).appendTo(a.el),B&&S.permanentLabels&&a.el.show(),++R;g=C.on(d.join(" "),J),j.on(s.join(" "),l[1],N).find("*").css({filter:"inherit"}),I.Elem[S.active]&&P(0,I,S.active,2),I.Asleep=S.onReady.call(t,"ready")===!1,I.Asleep||(T?("menu"!==T&&(g="dock"===T?j:O),I.Asleep=!!e(l[8]+","+l[6],g).addClass(i[4]).css({filter:"inherit"}),g.css({opacity:0}),A(C),g.animate({opacity:1},S.fadeIn,function(){var t=y(this);u(t).Asleep=!e(l[4],this).add(this).css({filter:""}).removeClass(i[4]),t.trigger("dockshow",["ready"]).trigger(d[0])})):(A(C),C.trigger("dockshow",["ready"]),x(I)))},convert:function(t){return O.call(e(t).get(0))}}}(),e.fn.jqdock=e.fn.jqDock=function(t){var r,s,c=this;return"nudge"===t||"idle"===t||"freeze"===t?c.filter(l[0]).each(function(){J.call(this,{type:"dock"+t})}):"destroy"===t?c=c.map(function(){var t,a,n,r,s=e(this).filter(l[0]),c=u(s.removeClass(i[0])),f=e.extend({},s.data(o[3]));if(s.length&&c){for(s.removeData(o[0]),b(c,-1),s.off(d.join(" "),J),t=0;t<c.ElCt;t++){n=c.Elem[t],(n.Label.el||e()).remove(),r=n.Img,r.attr(n.Orig.i).removeClass(i[2]+t),n.Orig.i.style||r.removeAttr("style"),"Link"===n.Link&&(r=r.parent(),r.attr(n.Orig.a),n.Orig.a.style||r.removeAttr("style")),f.el?e(r.data(o[2])).after(r).remove():s.append(r),r=n.Label.el=n.Orig.i=n.Orig.a=null;for(a in n)n[a]=null;n=null}e(l[6],s).empty().remove(),a=c.Style,f.el?(s.empty().remove(),n=e(f.el).removeData(o[1]).attr(f.attr),f.attr.style||n.removeAttr("style")):a?s.attr("style",a):s.removeAttr("style");for(t in c)c[t]=null;c=n=null}return f.el||this}):"active"===t||"expand"===t?c.each(function(){var e=y(this,1),a=y(e),n=u(a);n&&(b(n,-1),n.Frozen||(n.Frozen=n.Asleep=!!a.trigger("docksleep",["freeze"])),P(0,n,m(e),"active"===t?2:1))}):"get"===t?(c=c.eq(0),r=c.is("img"),s=u(r?y(c):c),c=(s&&r?s.Elem[m(y(c,1))]:s)||null):c.length&&!c.not("img").length?c.each(function(a,n){var r,i,l,o=u(y(n)),s=o?o.Elem[m(y(n,1))]:0,d=0;if(t=t||{},s){r=s.Major===s.Initial;for(l in{src:1,altsrc:1})t[l]&&(i=(e.isFunction(t[l])?t[l].call(n,s[l],l):t[l]).toString(),s[l]!==i&&(s[l]=i,d=("src"===l?r:!r)?l:d));d&&e(n).attr("src",s[d])}}):c=c.map(O).filter(function(){var t=e(this).children();return!y(this).length&&t.length&&!t.not("img").filter(function(){return 1!==e(this).children("img").parent("a").children().length}).length}).each(function(){var r,l,s=e(this).addClass(i[0]),d=e("img",s),c={Menu:s,Id:i[8]+e.jqdock.nextId++,Elem:[],OnDock:0,Stamp:0,width:0,height:0,Spread:0,Border:[],Opts:e.extend({},e.jqdock.defaults,s.data("jqdock"),k(s.data()),t||{}),Current:-1,Load:d.length,ElCt:d.length,ToFro:["","",0],Style:s.attr("style")},f=c.Opts;for(l in{size:1,distance:1,duration:1,inactivity:1,fadeIn:1,step:1,idle:1,active:1,sizeMax:1})f[l]=w(f[l]);l=a*f.coefficient,f.coefficient=isNaN(l)?1.5:l,r={middle:1,center:2}[f.align],r&&(l=w(f.bias),1>l&&(f.align=2>r?"top":"left"),l>99&&(f.align=2>r?"bottom":"right"),f.bias=l),f.labels&&!/^[tmb][lcr]$/.test(f.labels.toString())&&(f.labels={top:"br",left:"tr"}[f.align]||"tl"),f.setLabel||(f.setLabel=z),f.fadeLayer=f.fadeIn?{dock:1,wrap:1}[f.fadeLayer]?f.fadeLayer:"menu":"";for(l in{onSleep:1,onWake:1,onReady:1})f[l]||(f[l]=f[l]===!1?g:e.noop);r=/^m|c$/.test(f.labels),f.attenuation=Math.pow(f.distance,f.coefficient),f.vh={left:1,center:1,right:1}[f.align]?"v":"h",s.data(o[0],c),d.each(function(t,a){var i,l,o,d=e(a),h=d.parent("a"),p=h.attr("title")||"",u={};for(i in{src:1,alt:1,title:1,style:1})u[i]=d.attr(i)||"";for(o=(f.source?f.source.call(a,t):"")||d.data("jqdockAltsrc")||""||(/\.(gif|jpg|jpeg|png)$/i.test(u.alt||"")?u.alt:"")||u.src,c.Elem[t]={Img:d,src:u.src,altsrc:o,Title:u.title||p||"",Orig:{i:e.extend({},u),a:{title:p,style:h.attr("style")||""}},Label:{mc:r},Pad:[],Link:h.length?"Link":"Image"},i=4;i--;)c.Elem[t].Pad[i]=w(d.css("padding"+n[i]));(f.loader?"jquery"===f.loader:e.jqdock.useJqLoader)?e("<img>").on("load",{idx:t,menu:s[0]},C).attr({src:o}):(l=new Image,l.onload=function(){C.call(this,{data:{idx:t,menu:s[0]}}),l.onload="",l=null},l.src=o)})}).end(),c}}e(function(){e(".jqDockAuto").jqdock()})}(jQuery,window)});