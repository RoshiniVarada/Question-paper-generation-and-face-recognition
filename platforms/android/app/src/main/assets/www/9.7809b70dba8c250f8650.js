(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{wgxq:function(i,t,n){"use strict";n.r(t);var o=n("Valr"),e=n("DUip"),c=n("5A/x"),r=n("IYfF"),a=n("TYT/");function b(i,t){if(1&i&&(a.Vb(0,"div",3),a.Rb(1,"img",23),a.Ic(2),a.Ub()),2&i){var n=t.ngIf;a.Cb(1),a.rc("src",n.photoURL?n.photoURL:"/assets/dummy-user.png",a.Bc),a.rc("alt",n.displayName),a.Cb(1),a.Kc(" ",n.displayName," ")}}function s(i,t){if(1&i){var n=a.Wb();a.Vb(0,"div",24),a.Vb(1,"div",1),a.Vb(2,"div",25),a.Vb(3,"h5",26),a.Ic(4),a.Ub(),a.Vb(5,"small"),a.Ic(6),a.Ub(),a.Ub(),a.Vb(7,"div",27),a.Vb(8,"button",28),a.hc("click",(function(){a.zc(n);var i=t.$implicit;return a.lc().viewDetails(i)})),a.Rb(9,"ion-icon",29),a.Ub(),a.Ub(),a.Ub(),a.Ub()}if(2&i){var o=t.$implicit;a.Cb(4),a.Kc("Section ",o.payload.doc.data().no,""),a.Cb(2),a.Kc("Subject: ",o.payload.doc.data().sub,"")}}var l=[{path:"",component:function(){function i(i,t,n,o){this.firebaseService=i,this.router=t,this.authService=n,this.ngZone=o}return i.prototype.ngOnInit=function(){this.getData()},i.prototype.getData=function(){var i=this;this.firebaseService.getSections().subscribe((function(t){i.sections=t}))},i.prototype.goToUserProfile=function(){this.router.navigate(["/list-details"])},i.prototype.goToNewUser=function(){this.router.navigate(["/new-user"])},i.prototype.goToNewSection=function(){this.router.navigate(["/new-section"])},i.prototype.viewDetails=function(i){this.router.navigate(["/secdetails/"+i.payload.doc.id])},i.\u0275fac=function(t){return new(t||i)(a.Qb(c.a),a.Qb(e.c),a.Qb(r.a),a.Qb(a.z))},i.\u0275cmp=a.Kb({type:i,selectors:[["app-display-section"]],decls:36,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"navbar","navbar-dark","fixed-top","bg-dark","flex-md-nowrap","p-0"],[1,"col-sm-3"],[3,"click"],[1,"fas","fa-sign-out-alt"],[1,"col-sm-6"],["class","col-sm-3",4,"ngIf"],[1,"col-md-2","d-md-block","bg-light","sidebar"],[1,"sidebar-sticky"],[1,"nav","flex-column"],[1,"nav-item",3,"click"],[1,"nav-link"],[1,"fas","fa-user"],["role","main",1,"col-md-9","ml-sm-auto","col-lg-10","px-4"],[1,"inner-adjust"],["aria-label","breadcrumb"],[1,"breadcrumb"],["aria-current","page",1,"breadcrumb-item","active"],[1,"page-container","addpadding"],[1,"content-container"],[1,"list-group","users-list"],["class","list-group-item list-group-item-action flex-column align-items-start",4,"ngFor","ngForOf"],[1,"align-self-start","mr-1","img-thumbnail","rounded-circle",3,"src","alt"],[1,"list-group-item","list-group-item-action","flex-column","align-items-start"],[1,"col","col-md-8","text-col"],[1,"mb-1"],[1,"col","col-md-2","actions-col"],["type","button",1,"btn","btn-outline-primary","action",3,"click"],["name","arrow-round-forward",1,"icon"]],template:function(i,t){1&i&&(a.Vb(0,"div",0),a.Vb(1,"div",1),a.Vb(2,"div"),a.Vb(3,"nav",2),a.Vb(4,"div",3),a.Vb(5,"a",4),a.hc("click",(function(){return t.authService.SignOut()})),a.Rb(6,"i",5),a.Ic(7,"Log out "),a.Ub(),a.Ub(),a.Rb(8,"div",6),a.Gc(9,b,3,3,"div",7),a.Ub(),a.Ub(),a.Vb(10,"div",1),a.Vb(11,"nav",8),a.Vb(12,"div",9),a.Vb(13,"ul",10),a.Vb(14,"li",11),a.hc("click",(function(){return t.goToUserProfile()})),a.Vb(15,"a",12),a.Rb(16,"i",13),a.Ic(17,"User Profile "),a.Ub(),a.Ub(),a.Vb(18,"li",11),a.hc("click",(function(){return t.goToNewUser()})),a.Vb(19,"a",12),a.Rb(20,"i",5),a.Ic(21,"New User "),a.Ub(),a.Ub(),a.Vb(22,"li",11),a.hc("click",(function(){return t.goToNewSection()})),a.Vb(23,"a",12),a.Rb(24,"i",5),a.Ic(25,"New Section "),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(26,"main",14),a.Vb(27,"div",15),a.Vb(28,"nav",16),a.Vb(29,"ol",17),a.Vb(30,"li",18),a.Ic(31,"Section details"),a.Ub(),a.Ub(),a.Ub(),a.Vb(32,"div",19),a.Vb(33,"div",20),a.Vb(34,"div",21),a.Gc(35,s,10,2,"div",22),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub()),2&i&&(a.Cb(9),a.qc("ngIf",t.authService.userData),a.Cb(26),a.qc("ngForOf",t.sections))},directives:[o.k,o.j],styles:[""]}),i}()}],u=function(){function i(){}return i.\u0275mod=a.Ob({type:i}),i.\u0275inj=a.Nb({factory:function(t){return new(t||i)},imports:[[e.g.forChild(l)],e.g]}),i}(),d=n("vH0B");n.d(t,"DisplaySectionModule",(function(){return f}));var f=function(){function i(){}return i.\u0275mod=a.Ob({type:i}),i.\u0275inj=a.Nb({factory:function(t){return new(t||i)},imports:[[o.b,u,d.a]]}),i}()}}]);