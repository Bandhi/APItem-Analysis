if (Meteor.isClient) {
	Router.route('/', function () {
		this.render('home');
	});

	Router.route('/items');
	Router.route('/about');
	Router.route('/symbols');
	//http call for json not working, temp work around
	var APitems = {"3001":{"name":"Abyssal Scepter","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3113":{"name":"Aether Wisp","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"1052":{"name":"Amplifying Tome","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3003":{"name":"Archangel's Staff","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3504":{"name":"Ardent Censer","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3174":{"name":"Athene's Unholy Grail","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3060":{"name":"Banner of Command","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"1026":{"name":"Blasting Wand","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"1056":{"name":"Doran's Ring","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3708":{"name":"Stalker's Enchantment: Runeglaive","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3716":{"name":"Skirmisher Enchantment: Runeglaive","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3720":{"name":"Poachers Enchantment: Runeglaive","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3724":{"name":"Rangers Enchantment: Runeglaive","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3108":{"name":"Fiendish Codex","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3092":{"name":"Frost Queen's Claim","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3098":{"name":"Frostfang","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3124":{"name":"Guinsoo's Rageblade","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3136":{"name":"Haunting Guise","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3146":{"name":"Hextech Gunblade","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3145":{"name":"Hextech Revolver","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3025":{"name":"Iceborn Gauntlet","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3151":{"name":"Liandry's Torment","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3100":{"name":"Lich Bane","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3285":{"name":"Luden's Echo","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3041":{"name":"Mejai's Soulstealer","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3165":{"name":"Morellonomicon","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3115":{"name":"Nashor's Tooth","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"1058":{"name":"Needlessly Large Rod","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3198":{"name":"Perfect Hex Core","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3200":{"name":"Prototype Hex Core","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3089":{"name":"Rabadon's Deathcap","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3027":{"name":"Rod of Ages","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3116":{"name":"Rylai's Crystal Scepter","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3191":{"name":"Seeker's Armguard","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3040":{"name":"Seraph's Embrace","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3057":{"name":"Sheen","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3303":{"name":"Spellthief's Edge","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3196":{"name":"The Hex Core mk-1","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3197":{"name":"The Hex Core mk-2","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3078":{"name":"Trinity Force","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3023":{"name":"Twin Shadows","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3135":{"name":"Void Staff","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3152":{"name":"Will of the Ancients","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3050":{"name":"Zeke's Harbinger","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":[0,0],"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}},"3157":{"name":"Zhonya's Hourglass","5.11":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}},"5.14":{"description":"","gold":0,"NORMAL_5X5":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]},"RANKED_SOLO":{"usage":0,"goldSpent":[],"magicDamageDealt":[],"kd":[]}}}};
	var itemid = ['3001', '3113', '1052', '3003', '3504', '3174', '3060', '1026', '1056', '3708', '3716', '3720', '3724', '3108', '3092', '3098', '3124', '3136', '3146', '3145', '3025', '3151', '3100', '3285', '3041', '3165', '3115', '1058', '3198', '3200', '3089', '3027', '3116', '3191', '3040', '3057', '3303', '3196', '3197', '3078', '3023', '3135', '3152', '3050', '3157']; 
	Template.items.rendered = function() {
		if (!this.rendered) {
			var nice = "cool";
			//console.log(nice);
			this.rendered = true;
		}
	};
	Template.home.rendered = function() {
	    if (!this.rendered) {
				var data = [];
				var i;
				for (i = 0; i < itemid.length; i++) {
					//console.log(itemid[i]);
					var tmpr = [APitems[itemid[i]]["name"], itemid[i]];
					//console.log(tmpr);
					data.push(tmpr);
				}
	            var margin = {top: 50, bottom: 75, left:250, right: 40};
				var width = 1500 - margin.left - margin.right;
				var height = 2000 - margin.top - margin.bottom;

				var xScale = d3.scale.linear().range([0, width]);
				var yScale = d3.scale.ordinal().rangeRoundBands([0, height], 1.8,0);

				var numTicks = 5;
				var xAxis = d3.svg.axis().scale(xScale)
								.orient("top")
								.tickSize((-height))
								.ticks(numTicks);

				var svg = d3.select("#graph").append("svg")
							.attr("width", width+margin.left+margin.right)
							.attr("height", height+margin.top+margin.bottom)
							.attr("class", "base-svg");

				var barSvg = svg.append("g")
							.attr("transform", "translate("+margin.left+","+margin.top+")")
							.attr("class", "bar-svg");

				var x = barSvg.append("g")
						.attr("class", "x-axis");
				
				var xMax = d3.max(data, function(d) { return d[1]; } );
				var xMin = 0;
				xScale.domain([xMin, xMax]);
				yScale.domain(data.map(function(d) { return d[0]; }));
				
				d3.select(".base-svg").append("text")
					.attr("x", margin.left)
					.attr("y", (margin.top)/2)
					.attr("text-anchor", "start")
					.text("Item usage in normal 5v5 games")
					.attr("class", "title");
					
				var groups = barSvg.append("g").attr("class", "labels")
							.selectAll("text")
							.data(data)
							.enter()
							.append("g");

				var groups1 = barSvg.append("g").attr("class", "labels")
							.selectAll("text")
							.data(data)
							.enter()
							.append("g");
							
				groups.append("text")
						.attr("x", "0")
						.attr("y", function(d) { return yScale(d[0]); })
						.text(function(d) { return d[0]; })
						.attr("text-anchor", "end")
						.attr("dy", ".9em")
						.attr("dx", "-.32em")
						.attr("id", function(d,i) { return "label"+i; });	
				
				var bars = groups
							.attr("class", "bars")
							.append("rect")
							.style("fill", "steelblue")
							.attr("width", function(d) { return xScale(d[1]); })
							.attr("height", height/100)
							.attr("x", xScale(xMin))
							.attr("y", function(d) { return yScale(d[0]); })
							.attr("id", function(d,i) { return "bar"+i; });
							
				var bars1 = groups
							.attr("class", "bars")
							.append("rect")
							.attr("width", function(d) { return xScale(d[1]); })
							.attr("height", height/100)
							.attr("x", xScale(xMin))
							.attr("y", function(d) { return yScale(d[0])+20; })
							.attr("id", function(d,i) { return "bar"+i; });
							
				groups.append("text")
						.attr("x", function(d) { return xScale(d[1]); })
						.attr("y", function(d) { return yScale(d[0]); })
						.text(function(d) { return d[1]; })
						.attr("text-anchor", "end")
						.attr("dy", "1.2em")
						.attr("dx", "-.32em")
						.attr("id", "precise-value");
						
				groups1.append("text")
						.attr("x", function(d) { return xScale(d[1]); })
						.attr("y", function(d) { return yScale(d[0])+20; })
						.text(function(d) { return d[1]; })
						.attr("text-anchor", "end")
						.attr("dy", "1.2em")
						.attr("dx", "-.32em")
						.attr("id", "precise-value");
						
				bars
					.on("mouseover", function() {
						var currentGroup = d3.select(this);
						currentGroup.style("fill", "brown");
						//currentGroup.select("text").style("font-weight", "bold");
					})
					.on("mouseout", function() {
						var currentGroup = d3.select(this);
						currentGroup.style("fill", "steelblue");
						//currentGroup.select("text").style("font-weight", "normal");
					});
					
				bars1
					.on("mouseover", function() {
						var currentGroup = d3.select(this);
						currentGroup.style("fill", "brown");
						//currentGroup.select("text").style("font-weight", "bold");
					})
					.on("mouseout", function() {
						var currentGroup = d3.select(this);
						currentGroup.style("fill", "black");
						//currentGroup.select("text").style("font-weight", "normal");
					});

				x.call(xAxis);
				var grid = xScale.ticks(numTicks);
				barSvg.append("g").attr("class", "grid")
					.selectAll("line")
					.data(grid, function(d) { return d; })
					.enter().append("line")
						.attr("y1", 0)
						.attr("y2", height+margin.bottom)
						.attr("x1", function(d) { return xScale(d); })
						.attr("x2", function(d) { return xScale(d); })
						.attr("stroke", "white");
			this.rendered = true;
	    }
	};
}


if (Meteor.isServer) {
	Meteor.startup(function () {
		
	});
}
