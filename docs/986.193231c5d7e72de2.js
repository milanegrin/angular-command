"use strict";(self.webpackChunkgit_command=self.webpackChunkgit_command||[]).push([[986],{986:(F,s,i)=>{i.r(s),i.d(s,{GitModule:()=>$});var C=i(6895),d=i(6148),p=i(9093),t=i(4650),g=i(5139),x=i(5938),T=i(3645),c=i(3626),u=i(4144),f=i(9549),h=i(9652);function Z(e,o){1&e&&(t.TgZ(0,"th",14),t._uU(1," Command "),t.qZA())}function G(e,o){if(1&e&&(t.TgZ(0,"td",15)(1,"code"),t._uU(2),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.hij("",n.command," ")}}function v(e,o){1&e&&(t.TgZ(0,"th",14),t._uU(1," Description "),t.qZA())}function _(e,o){if(1&e&&(t.TgZ(0,"td",15)(1,"mat-panel-description"),t._uU(2),t.qZA()()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n.description)}}function S(e,o){1&e&&(t.TgZ(0,"th",14),t._uU(1," Example "),t.qZA())}function y(e,o){if(1&e&&(t.TgZ(0,"td",15),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.example," ")}}function A(e,o){1&e&&(t.TgZ(0,"th",14),t._uU(1," Url "),t.qZA())}function U(e,o){if(1&e&&(t.TgZ(0,"td",15)(1,"a",16),t._uU(2),t.qZA()()),2&e){const n=o.$implicit;t.xp6(1),t.s9C("href",n.url,t.LSH),t.xp6(1),t.hij(" ",n.url," ")}}function D(e,o){1&e&&(t.TgZ(0,"th",14),t._uU(1," Action "),t.qZA())}function N(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"td",15)(1,"div")(2,"span",17),t.NdJ("click",function(){const m=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.edit(m))}),t._uU(3," edit "),t.qZA(),t.TgZ(4,"span",17),t.NdJ("click",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.create())}),t._uU(5,"fiber_new"),t.qZA(),t.TgZ(6,"span",17),t.NdJ("click",function(){const m=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.delete(m.id))}),t._uU(7,"delete"),t.qZA()()()}}function Y(e,o){1&e&&t._UZ(0,"tr",18)}function B(e,o){1&e&&t._UZ(0,"tr",19)}const w=[{path:"",component:(()=>{class e{constructor(n,a,l){this.firestoreService=n,this.dialog=a,this.openSnackBarService=l,this.displayedColumns=["command","description","example","url","action"]}ngOnInit(){this.firestore$=this.firestoreService.getAll(),this.firestore$.subscribe(n=>{this.dataSource=n,this.auxDataSource=this.dataSource})}applyFilter(n){const a=n.target.value;a?(console.log(a),this.dataSource=this.dataSource.filter(l=>l.description.toLowerCase().includes(a.trim().toLowerCase())||l.command.toLowerCase().includes(a.trim().toLowerCase()))):this.dataSource=this.auxDataSource,console.log(this.dataSource)}edit(n){this.dialog.open(p.U,{data:n,width:"70%",height:"60%"})}create(){this.dialog.open(p.U,{data:{},width:"70%",height:"60%"})}delete(n){this.firestoreService.delete(n).then(()=>{this.openSnackBarService.openSnackBar("Delete","Command","red-snackbar","login-snackbar")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.d),t.Y36(x.uw,8),t.Y36(T.r))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-git"]],decls:24,vars:3,consts:[[1,"container","mt-4"],["appearance","fill",1,"form-control"],["matInput","","placeholder","Search columns command, description",3,"keyup"],["input",""],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","command"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","example"],["matColumnDef","url"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["target","_blank",3,"href"],[1,"material-icons",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),t._uU(3,"Filter"),t.qZA(),t.TgZ(4,"input",2,3),t.NdJ("keyup",function(m){return a.applyFilter(m)}),t.qZA()(),t.TgZ(6,"table",4),t.ynx(7,5),t.YNc(8,Z,2,0,"th",6),t.YNc(9,G,3,1,"td",7),t.BQk(),t.ynx(10,8),t.YNc(11,v,2,0,"th",6),t.YNc(12,_,3,1,"td",7),t.BQk(),t.ynx(13,9),t.YNc(14,S,2,0,"th",6),t.YNc(15,y,2,1,"td",7),t.BQk(),t.ynx(16,10),t.YNc(17,A,2,0,"th",6),t.YNc(18,U,3,2,"td",7),t.BQk(),t.ynx(19,11),t.YNc(20,D,2,0,"th",6),t.YNc(21,N,8,0,"td",7),t.BQk(),t.YNc(22,Y,1,0,"tr",12),t.YNc(23,B,1,0,"tr",13),t.qZA()()),2&n&&(t.xp6(6),t.Q6J("dataSource",a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns))},dependencies:[c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,u.Nt,f.KE,f.hX,h.u4],styles:[".mat-column-description[_ngcontent-%COMP%]{width:260px!important}.mat-column-example[_ngcontent-%COMP%]{width:330px!important}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(w),d.Bz]}),e})();var k=i(4006),J=i(9101),Q=i(811),R=i(3336);let $=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[C.ez,M,c.p0,u.c,k.UX,J.ot,h.To,Q.vV,R.Ps]}),e})()}}]);