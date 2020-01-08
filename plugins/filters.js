import Vue from 'vue';
import marked from 'marked';

Vue.filter('parseMd', function(content) {
	return marked(content);
});
