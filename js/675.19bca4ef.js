"use strict";(self["webpackChunkvue3_test"]=self["webpackChunkvue3_test"]||[]).push([[675],{1675:function(e,o,t){t.r(o),t.d(o,{default:function(){return w}});var a=t(3396),u=t(9242);const s={class:"body"};function n(e,o,t,n,i,c){const h=(0,a.up)("BrandLogo"),m=(0,a.up)("PlayVideo"),g=(0,a.up)("MenuList");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",{class:"content",onTouchstart:o[0]||(o[0]=o=>e.touchEvent(1,o)),onTouchmove:o[1]||(o[1]=o=>e.touchEvent(2,o)),onTouchend:o[2]||(o[2]=o=>e.touchEvent(3,o))},[(0,a.Wm)(u.uT,{name:"opacity"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(h,{logo:0==e.showPageNum},null,8,["logo"]),[[u.F8,e.showLogo]])])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.pageNum,((o,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(u.uT,{name:"opacity"},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.j4)((0,a.LL)("LongPage"+t),{ref_for:!0,ref:"LongPage"+t,onShowVideoPopup:e.showVideoPopup,currentIsShowPage:e.showPageNum==o},null,8,["onShowVideoPopup","currentIsShowPage"])),[[u.F8,e.showPageNum==o]])])),_:2},1024)])))),128)),(0,a.Wm)(u.uT,{name:"opacity-scale2"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(m,{ref:"playVideo",currentIsShowPage:e.showHideVideo},null,8,["currentIsShowPage"]),[[u.F8,e.showHideVideo]])])),_:1}),(0,a.Wm)(u.uT,{name:"left-right"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{ref:"menuList",onSelectMenu:e.selectMenu,onSelectMenuBack:e.selectMenuBack},null,8,["onSelectMenu","onSelectMenuBack"])])),_:1})],32)])}var i=t(4870);const c=(e,o,t,a=!0,u=100)=>("number"==typeof a&&("boolean"==typeof u?[a,u]=[u,a]:(u=a,a=!0)),new Promise((s=>{1==e&&(t.startX=o.touches[0].clientX,t.startY=o.touches[0].clientY),2==e&&(a&&o.preventDefault(),t.moveX=o.touches[0].clientX,t.moveY=o.touches[0].clientY,t.startX-t.moveX>=u&&!t.touchSwitch&&(t.touchSwitch=!0,s({code:1,msg:"左滑"})),t.startX-t.moveX<=-u&&!t.touchSwitch&&(t.touchSwitch=!0,s({code:2,msg:"右滑"})),t.startY-t.moveY>=u&&!t.touchSwitch&&(t.touchSwitch=!0,s({code:3,msg:"上滑"})),t.startY-t.moveY<=-u&&!t.touchSwitch&&(t.touchSwitch=!0,s({code:4,msg:"下滑"}))),3==e&&(t.touchSwitch=!1)})));var h={name:"indexName",setup(){const e=(0,i.iH)(),o=(0,i.iH)(""),t=(0,i.iH)(),u=(0,i.iH)(),s=(0,i.iH)();(0,a.JJ)("isShowBackBtn",o),(0,a.JJ)("videoSrc",u),(0,a.JJ)("animateDelayTime",1500),(0,a.JJ)("defaultType",s),(0,a.bv)((()=>{h.showMenuBtnList(!1),setTimeout((()=>{n.showLogo=!0,h.page1Start()}),1e3)}));const n=(0,i.qj)({showMenuPageList:[0,3,41,42,43,44,5,6,7],showPageNum:1,showLogo:!1,showHideVideo:!1,transitionName1:"opacity",transitionName2:"rl-page",transitionName3:"rl-page",transitionName4:"rl-page",isOpenShowTouchPage:!1,isPageAnimateOk:!0,setTimeout_isPageAnimateOk:null,pageNum:12}),h=(0,i.qj)({page1Start:()=>{setTimeout((()=>{}),500)},touchEvent(e,o){c(e,o,n).then((e=>{n.isPageAnimateOk&&(n.isPageAnimateOk=!1,n.setTimeout_isPageAnimateOk=setTimeout((()=>{n.isPageAnimateOk=!0}),1e3),console.log("【滑动事件】",n.showPageNum),n.isShowVideoPopup||(1==e.code&&(n.showPageNum<n.pageNum?n.showPageNum++:n.showPageNum==n.pageNum&&(n.showPageNum=1)),2==e.code&&(n.showPageNum,n.showPageNum>1?n.showPageNum--:1==n.showPageNum&&(n.showPageNum=n.pageNum))))}))},openInsidePage(e){o.value=!0,n.showPageNum=e.showPageNum,s.value=e.data.type},selectMenu:e=>{console.log("【菜单回调】",e,e[2]),n.showPageNum=e[2]},selectMenuBack(){o.value=!1,n.showHideVideo=!1,n.isShowVideoPopup=!1,n.showPageNum=sessionStorage.getItem("prevPageNum")},showMenuBtnList(o){o?e.value.play():e.value.hide()},openShowTouchPage(e){n.isOpenShowTouchPage=e},showVideoPopup(t){console.log("e",t),u.value=t.videoSrc,o.value=!0,n.showHideVideo=!0,n.isShowVideoPopup=!0,n.transitionName1="opacity-scale2",sessionStorage.setItem("prevPageNum",n.showPageNum),n.showPageNum=-1,e.value.switchMenuBackBtn(!0)}});return(0,a.YP)([()=>n.isOpenShowTouchPage,()=>n.showPageNum],(([e,o],[t,a])=>{-1!=t&&(n.transitionName1="opacity")})),{menuList:e,playVideo:t,...(0,i.BK)(n),...(0,i.BK)(h)}}},m=t(89);const g=(0,m.Z)(h,[["render",n]]);var w=g}}]);