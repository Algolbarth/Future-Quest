<script>
	export const System = {
		pages : {
			actual : {},
			list : [],
			add : function (name, svelte) {
				System.pages.list.push({
					name: name,
					svelte: svelte,
				});
			},
			getByName : function (name) {
				for (const page of System.pages.list) {
					if (page.name == name) {
						return page;
					}
				}
			},
			change : function (name) {
				System.pages.actual = System.pages.getByName(name);
			},
		},
		starters : {
			class : [],
			instance : [],
			getByName : function (name) {
				for (let i=0;i<this.instance.length;i++) {
					if (this.instance[i].race == name) {
						return new this.class[i]();
					}
				}
			},
		},
		parts : {
			class : [],
			instance : [],
			getByName : function (name, level) {
				for (let i=0;i<this.instance.length;i++) {
					if (this.instance[i].name == name) {
						return new this.class[i](level);
					}
				}
			},
		},
		races : {
			class : [],
			instance : [],
			getByName : function (name) {
				for (let i=0;i<this.instance.length;i++) {
					if (this.instance[i].race == name) {
						return new this.class[i](System);
					}
				}
			},
		},
		skills : {
			class : [],
			instance : [],
			getByName : function (name) {
				for (let i=0;i<this.instance.length;i++) {
					if (this.instance[i].name == name) {
						return new this.class[i]();
					}
				}
			},
		},
		planets : {
			class : [],
			instance : [],
			getByName : function (name, level, step) {
				for (let i=0;i<this.instance.length;i++) {
					if (this.instance[i].name == name) {
						this.instance[i].stat++;
						return new this.class[i](System, level, step);
					}
				}
			},
		},
		sectors : {
			class : [],
			instance : [],
			getByName : function (name, slot) {
				for (let i=0;i<this.instance.length;i++) {
					if (this.instance[i].name == name) {
						return new this.class[i](System, slot);
					}
				}
			},
		},
		events : {
			class : [],
			instance : [],
			getByName : function (name, level) {
				for (let i=0;i<this.instance.length;i++) {
					if (this.instance[i].name == name) {
						return new this.class[i](System, level);
					}
				}
			},
		},
		game : {},
	}

	import * as skills from "./Skills";
	for (const skill of Object.keys(skills)) {
        const skillClass = skills[skill];
		const skillInstance = new skillClass();
        System.skills.class.push(skillClass);
		System.skills.instance.push(skillInstance);
    };

	import * as races from "./Characters";
	for (const race of Object.keys(races)) {
        const raceClass = races[race];
		const raceInstance = new raceClass(System);
        System.races.class.push(raceClass);
		System.races.instance.push(raceInstance);
    };

	import * as parts from "./Parts";
	for (const part of Object.keys(parts)) {
        const partClass = parts[part];
		const partInstance = new partClass();
        System.parts.class.push(partClass);
		System.parts.instance.push(partInstance);
    };

	import * as starters from "./Starters";
	for (const starter of Object.keys(starters)) {
        const starterClass = starters[starter];
		const starterInstance = new starterClass(System);
        System.starters.class.push(starterClass);
		System.starters.instance.push(starterInstance);
    };

	import * as planets from "./Planets";
	for (const planet of Object.keys(planets)) {
        const planetClass = planets[planet];
		const planetInstance = new planetClass(System, 1);
		planetInstance.stat = 0;
        System.planets.class.push(planetClass);
		System.planets.instance.push(planetInstance);
    };

	import * as sectors from "./Sectors";
	for (const sector of Object.keys(sectors)) {
        const sectorClass = sectors[sector];
		const sectorInstance = new sectorClass(System, 1);
        System.sectors.class.push(sectorClass);
		System.sectors.instance.push(sectorInstance);
    };

	import * as events from "./Events";
	for (const event of Object.keys(events)) {
        const eventClass = events[event];
		const eventInstance = new eventClass(System, 1);
        System.events.class.push(eventClass);
		System.events.instance.push(eventInstance);
    };

	import TitleScreen from "./TitleScreen.svelte";
	System.pages.add("TitleScreen", TitleScreen);

	import SelectStarter from "./SelectStarter.svelte";
	System.pages.add("SelectStarter", SelectStarter);

	import Menu from "./Menu/Menu.svelte";
	System.pages.add("Menu", Menu);

	import Ship from "./Ship.svelte";
	System.pages.add("Ship", Ship);

	import Character from "./Character.svelte";
	System.pages.add("Character", Character);

	import Part from "./Part.svelte";
	System.pages.add("Part", Part);

	import Upgrade from "./Upgrade.svelte";
	System.pages.add("Upgrade", Upgrade);

	import Sector from "./Sector.svelte";
	System.pages.add("Sector", Sector);

	import Map from "./Map.svelte";
	System.pages.add("Map", Map);

	import Event from "./Event.svelte";
	System.pages.add("Event", Event);

	import GameOver from "./GameOver.svelte";
	System.pages.add("GameOver", GameOver);

	import Victory from "./Victory.svelte";
	System.pages.add("Victory", Victory);

	System.pages.change("TitleScreen");
</script>

<div id="html">
	<div id="body">
		<svelte:component this={System.pages.actual.svelte} {System} />
	</div>
</div>

<style>
	#html {
		background:black;
		color:white;
		width:100vw;
		height:100vh;
		overflow:auto;
		position:fixed;
		top:0;
		left:0;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight:bold;
	}

	#body {
		padding:1%;
	}

	:global(button) {
		border:solid;
		border-color:white;
		background:none;
		color:white;
		cursor:pointer;
		font-weight:bold;
	}

	:global(button.lock) {
		border-color:grey;
		color:grey;
	}

	:global(.center) {
		text-align:center;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
	}

	:global(.cost) {
		color:red;
		display:inline-block;
	}

	:global(.win) {
		color:green;
		display:inline-block;
	}
</style>