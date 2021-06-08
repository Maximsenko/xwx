var feed = new Instafeed({
	get:'user', 
	filter: function(image) 
	{ return image.tags.indexOf('nature') >= 0; } ,
	accessToken:'1091894982.727bfe1.cd7b4e1b16584c9db10025591f9edbc4',
	userId:'1091894982', 
	template: '<a href="{{link}}"><img src="{{image}}" /></a>' 
	sortBy: 'most-recent',
  limit: 4,
  links: false
	}) 
	feed.run();