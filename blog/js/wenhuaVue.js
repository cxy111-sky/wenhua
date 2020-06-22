// const  login= ()=>import('../components/login');
// const  register= ()=>import('../components/register');
// const  user= ()=>import('../components/user');
	const  create= ()=>import('../components/create');
	const  feature= ()=>import('../components/feature');
	window.onload=function() {
				//创建新建路由组件
				const create={
					template:'#create1'
					// methods:{
					// 	nextclick() {
					// 		return this.$router.push('/feature');
					// 	}
					// }
				}
				//创建课程封面组件
				const feature={
					template:'#feature1',
					data() {
						return {
							imgSrc:'../img/wenhua5.jpg',
							imgSrc1:[
								'../img/wenhua1.jpg','../img/wenhua2.jpg','../img/wenhua3.jpg',
								'../img/wenhua4.jpg','../img/wenhua5.jpg'
							],
							imgSrc2:[
								'../img/wenhua6.jpg',
								'../img/wenhua7.jpg','../img/wenhua8.jpg','../img/wenhua9.jpg',
								'../img/wenhua10.jpg'
							],
							currentpage:0
						}
					},
					methods:{
						change1(index) {
							// this.currentpage=index;
							index++;
							this.imgSrc='../img/wenhua'+index+'.jpg';
							// console.log(index);
							// this.currentpage++;
							// this.imgSrc='../img/wenhua'+this.currentpage+'.jpg';
							// console.log(index);
						},
						change2(index) {
							index+=6;
							this.imgSrc='../img/wenhua'+index+'.jpg';
						}
					}
				};
				//创建保存组件
				const preserve={
					template:'#preserve'
				};
				//创建上传文件
				const document1={
					template:'#document1'
				};
				//创建路由匹配规则
				const routes=[
					{path:'',redirect:'/create'},
					{path:'/create',component:create,
						meta:{
							title:'文华教学平台新建课程'
						}
					},
					{path:'/feature',component:feature,
						meta:{
							title:'文华教学平台课程封面'
						}},
					{path:'/preserve',component:preserve},
					{path:'/document1',component:document1,
						meta:{
							title:'上传文件界面'
						}
					}
				];
				//创建路由对象
				const router=new VueRouter({
					routes
					// mode:"history"
					// linkActiveClass:"active"
				});
				router.beforeEach((to,from,next)=> {
					next();
					document.title=to.meta.title;
				});
				//创建vue实例 挂载div以及监听路由事件
				const app=new Vue({
					el:"#app",
					data:{

					},
					router:router
				});
			}  