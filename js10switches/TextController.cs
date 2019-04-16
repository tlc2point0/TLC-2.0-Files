using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class TextController : MonoBehaviour {

	public Text textBox;
	public Image stateImage;

	private enum States {
		level_start, grove, lake_ground, lake_water, underwater_opening, underwater_cave, 
		sword_in_stone, sword_in_hand, dark_expanse, drown, crocodile, 
		crocodile_death, kill_crocodile, keyB_room, keyB_in_pocket, 
		locked_door, keyA_room, dark_area, pit_death, unlit_torch_room, brazier, 
		lit_torch_room, room_with_a_pit, trap_floor_die, dragon, dragon_sword_death, 
		locked_room, win, dragon_tail_death};

	private States myState;
	private bool sword;
	private bool unlit_torch;
	private bool keyA;
	private bool keyB;
	private int randomChoice;

	// Use this for initialization
	void Start () {
		initializeVariables();
		myState = States.level_start;
	}
	
	// Update is called once per frame
	void Update () {

	// Could optionally use a switch statement instead of ifs and else-ifs,
		// which is also more memory-efficient, but I'll leave it to you to 
		// finish (and then comment out the ifs and else-ifs in Update() ).

		switch (myState) {
			case States.start: 
				start();
				break;
			case States.grove:
				grove();
				break;
			case States.lake_ground:
				lake_ground();
				break;
//			//
//			// To-do: put other cases here for all the other states!
//			//
			default:
				textBox.text = "Your game is broken. Fix it!";
		}

		// SECTION 1 STATE TRANSITIONS

		if 			(myState == States.level_start) 		{level_start();}
		else if (myState == States.grove) 					{grove();}
		else if (myState == States.lake_ground) 		{lake_ground();}
		else if (myState == States.lake_water)			{lake_water();}
		else if (myState == States.underwater_opening) 	{underwater_opening();}
		else if (myState == States.underwater_cave) 	{underwater_cave();} 
		else if (myState == States.sword_in_stone) 		{sword_in_stone();} 
		else if (myState == States.sword_in_hand) 	{sword_in_hand();} 
		else if (myState == States.dark_expanse) 		{dark_expanse();} 
		else if (myState == States.drown) 					{drown();}

		// SECTION 2 STATE TRANSITIONS

		else if (myState == States.crocodile)				{crocodile();}
		else if (myState == States.crocodile_death)		{crocodile_death();}
		else if (myState == States.kill_crocodile)		{kill_crocodile();}
		else if (myState == States.keyB_room)				{keyB_room();}
		else if (myState == States.keyB_in_pocket)		{keyB_in_pocket();}

		// SECTION 3 STATE TRANSITIONS

		else if (myState == States.locked_door)			{locked_door();}
		else if (myState == States.keyA_room)				{keyA_room();}
		else if (myState == States.dark_area)				{dark_area();}
		else if (myState == States.pit_death) 			{pit_death();}
		else if (myState == States.unlit_torch_room)	{unlit_torch_room();}
		else if (myState == States.brazier)				{brazier();}

		// SECTION 4 STATE TRANSITIONS

		else if (myState == States.lit_torch_room)		{lit_torch_room();}
		else if (myState == States.room_with_a_pit)		{room_with_a_pit();}
		else if (myState == States.trap_floor_die)		{trap_floor_die();}
		else if (myState == States.dragon)				{dragon();}
		else if (myState == States.dragon_sword_death)	{dragon_sword_death();}
		else if (myState == States.locked_room)			{locked_room();}
		else if (myState == States.win)					{win();}
		else if (myState == States.dragon_tail_death)	{dragon_tail_death();}

	} // end of Update ()

//	VARIABLE INITIALIZER FUNCTION
	void initializeVariables () {
		sword = false;
		keyA = false;
		keyB = false;
		unlit_torch = false;
		randomChoice = Random.Range(0,3);
	}

//	SECTION 1 FUNCTIONS

	void level_start() {
		textBox.text = "Welcome to \"Text Adventure\"!\n\n" +
			"Press any key to begin the game.";
		if (Input.anyKey) {
			myState = States.grove;
		}
	}
	void grove() {
		textBox.alignment = TextAnchor.UpperLeft;
		textBox.text = "You find yourself in a sunny forest grove all " +
			"of a sudden. What happened to get you you here? Why are you " +
			"here? Let's find out!\n\n" +
				"Press N to go north.\n" +
				"Press E to go east.\n" +
				"Press S to go south.";
		if (Input.GetKeyDown (KeyCode.N)) {
			myState = States.lake_ground;
		} else if (Input.GetKeyDown (KeyCode.S)) {
			myState = States.crocodile;
		} else if (Input.GetKeyDown (KeyCode.E)) {
			myState = States.locked_door;
		}
	}
	void lake_ground () {
		textBox.text = "After a short walk, you find yourself on the " +
			"bank of a large, crystal blue lake. There appears to be " +
			"something dark inside it near your position. Maybe it's " +
			"a secret underwater passage?\n\n" +
				"Press D to dive in.\n" +
				"Press S to go south.";
		if (Input.GetKeyDown (KeyCode.D)) {
			myState = States.underwater_opening;
		} else if (Input.GetKeyDown (KeyCode.S)) {
			myState = States.grove;
		}
	}
	void lake_water () {
		textBox.text = "You come up from the water, coughing and heaving " +
			"heavily from your ordeal in the lake. The grove is visible " +
			"through the forest path south, whereas dense, impenetrable " +
			"woods surround the rest of the lake.\n\n" +
				"Press D to dive back into the lake.\n" +
				"Press S to walk south to the grove.";
		if (Input.GetKeyDown (KeyCode.D)) {
			myState = States.underwater_opening;
		} 
		else if (Input.GetKeyDown (KeyCode.S)) {
			myState = States.grove;
		}
	}
	void underwater_opening() {
		textBox.text = "You dive into the lake and swim into it a bit. " +
			"Soon, you come across a dark opening in a ridgeside leading " +
			"into a cave.\n\n" +
				"Press E to enter the opening.\n" +
				"Press M to move past the opening.";
		if (Input.GetKeyDown (KeyCode.E)) {
			myState = States.underwater_cave;
		} else if (Input.GetKeyDown (KeyCode.M)) {
			myState = States.dark_expanse;
		}
	}
	void underwater_cave () {
		textBox.text = "The cave is dark, danky, and silent. As you say " +
			"\"Hello!\" into the void, your echo comes back far too " +
			"late....\n\n" +
				"Press F to move forward.\n" +
				"Press E to exit the cave.";
		if (Input.GetKeyDown (KeyCode.F)) {
			myState = States.sword_in_stone;
		} else if (Input.GetKeyDown (KeyCode.E)) {
			myState = States.underwater_opening;
		}
	}
	void sword_in_stone () {
		if (sword == false) {
			textBox.text = "After what seems like forever, you finally " +
				"come upon a rusty-looking sword in a stone. Who on " +
				"Earth would put a cheap sword in a stone? Oh, wait " +
				"- this may not be Earth.\n\n" +
					"Press P to pull out the \"sword\".\n" +
					"Press R to return to the cave.";
			if (Input.GetKeyDown (KeyCode.P)) {
				sword = true;
				myState = States.sword_in_hand;
			} else if (Input.GetKeyDown (KeyCode.R)) {
				myState = States.underwater_cave;
			}
		} else {
			textBox.text = "The stone you pulled the sword from " +
				"is empty.\n\n" +
					"Press R to return to the cave.";
			if (Input.GetKeyDown (KeyCode.R)) {
				myState = States.underwater_cave;
			}
		}
	}
	void sword_in_hand () {
		textBox.text = "After a lot of struggling, you pulled out " +
			"the sword. Good job! Now all you have to worry about is " +
			"tetanus.\n\n" +
				"Press C to continue.";
		if (Input.GetKeyDown (KeyCode.C)) 	{myState = States.sword_in_stone;}
	}
	void dark_expanse () {
		textBox.text = "You've been swimming for a while now and it's " +
			"getting harder to breathe. Still, you want to go further, " +
			"and an intriguing stretch of pure and unfathomable darkness " +
			"appears before you.\n\n" +
				"Press U to swim back up.\n" +
				"Press D to swim further down.";
		if (Input.GetKeyDown (KeyCode.U)) {
			myState = States.lake_water;
		} else if (Input.GetKeyDown (KeyCode.D)) {
			myState = States.drown;
		}
	}
	void drown () {
		textBox.text = "Whoops!\n\nYou got lost in the darkness and " +
			"drowned.\n\n" +
				"Press P to play again.";
		if (Input.GetKeyDown (KeyCode.P)) 	{initializeVariables();
												myState = States.grove;}
	}

	// SECTION 2 FUNCTIONS

	void crocodile () {
		if (keyB) {
			textBox.text = "The crocodile is dead and the key has been " +
				"picked up. All that remains here is the serene sound " +
				"of the river rushing by.\n\n" +
					"Press R to return to the grove.";
			if (Input.GetKeyDown (KeyCode.R)) 	{myState = States.grove;}
		} else {
			string crocodile_text = "The sound of a rushing river fills your ears " +
				"as you make your way through a lush and sunny forest. \"What " +
				"a beautiful place,\" you think to yourself. Suddenly, a " +
				"crocodile appears out of the water, ready to snap you in " +
				"its jaws!\n\n";
			if (!sword) {
				crocodile_text += "Press F to fend it off with your fists.\n" +
									"Press N to run back north!";
			} else if (sword) {
				crocodile_text += "Press F to fend it off with your fists.\n" +
									"Fists? Hell no! Press S to use your sword!\n" +
									"Press N to run back north.";
			}
			textBox.text = crocodile_text;
			if (Input.GetKeyDown (KeyCode.F)) {
				myState = States.crocodile_death;
			} else if (Input.GetKeyDown (KeyCode.N)) {
				myState = States.grove;
			} else if (Input.GetKeyDown (KeyCode.S) && sword) {
				myState = States.kill_crocodile;
			}
		}
	}	
	void crocodile_death () {
		textBox.text = "The crocodile bites your hand off, spraying " +
			"blood everywhere. You run for your life, but are losing " +
			"too much blood... and when it catches up to you, it bites " +
			"the rest off, piece by piece....\n\n" +
				"Press P to play again.";
		if (Input.GetKeyDown (KeyCode.P)) 	{initializeVariables();
												myState = States.grove;}
	}	
	void kill_crocodile () {
		textBox.text = "You swing your sword at the crocodile just as it " +
			"lunges at you, splitting its mouth apart at the muscle. The " +
			"once mighty beast falls slack-jawed to the ground, wobbling " +
			"back and forth, its black blood oozing from the throat. You " +
			"are safe, for now.\n\nA shiny object appears on the ground " +
			"beside its paw.\n\n" +
				"Press E to examine the object.";
		if (Input.GetKeyDown (KeyCode.E)) 	{myState = States.keyB_room;}
	}	
	void keyB_room () {
		textBox.text = "It appears to be a key! You're not sure why a " +
			"crocodile would have a key in the middle of the forest, " +
			"but from all the fantasy adventure games you played as a " +
			"child, you're sure that it will prove to be useful.\n\n" +
				"Press P to pick up the key.";
		if (Input.GetKeyDown (KeyCode.P)) 	{keyB = true;
											myState = States.keyB_in_pocket;}
	}	
	void keyB_in_pocket () {
		textBox.text = "The key is in your pocket.\n\n" +
				"Press R to return.";
		if (Input.GetKeyDown (KeyCode.R)) 	{myState = States.grove;}
	}

	// SECTION 3 FUNCTIONS
	
	void locked_door () {
		if (!keyA) {
			textBox.text = "Going deeper into the forest, the ambience goes " +
				"from sunny and cheery to dark and gloomy fast. Pretty soon, " +
				"you are enveloped in a thick fog and almost run " +
				"headlong into a door unexpectedly. The door is locked, and " +
				"on it you see two arrows: one silver and one gold.\n\n" +
					"Press S to follow the silver arrow.\n" +
					"Press G to follow the gold arrow.\n" +
					"Press R to return to the grove.";
			if (Input.GetKeyDown (KeyCode.R)) {
				myState = States.grove;
			} else if (Input.GetKeyDown (KeyCode.S)) {
				myState = States.keyA_room;
			} else if (Input.GetKeyDown (KeyCode.G)) {
				myState = States.unlit_torch_room;
			}
		} else if (keyA) {
			textBox.text = "The feeling in the air is still incredibly dark " +
				"and gloomy here. Luckily, with this key, you can go somewhere " +
				"a little more inviting (or as inviting " +
				"as randomly-locked doors in the woods can be).\n" +
				"The door is still locked, and on it you see the same two " +
				"arrows.\n\n" +
					"Press U to unlock and enter the door.\n" +
					"Press S to follow the silver arrow.\n" +
					"Press G to follow the gold arrow.\n" +
					"Press R to return to the grove.";
			if (Input.GetKeyDown (KeyCode.R)) {
				myState = States.grove;
			} else if (Input.GetKeyDown (KeyCode.S)) {
				myState = States.keyA_room;
			} else if (Input.GetKeyDown (KeyCode.G)) {
				myState = States.unlit_torch_room;
			} else if (Input.GetKeyDown (KeyCode.U)) {
				myState = States.dark_area;
			}
		}
	}	
	void keyA_room () {
		if (keyA) {
			textBox.text = "You have picked up the key from this " +
				"area. It seems like the enchant no longer works now, and " +
				"the stand is now invisible from the fog that surrounds it.\n\n" +
					"Press R to return to the locked door.";
			if (Input.GetKeyDown (KeyCode.R)) {
				myState = States.locked_door;
			}
		} else {
			textBox.text = "The silver arrow has led you to a narrow stone " +
				"stand in a grassy clearing. It almost seems magically " +
				"enchanted to oppose the fog around it, which nearly perfectly " +
				"envelops it in a semi-spherical pattern.\n" +
				"On the stand, you see a small silver key.\n\n" +
					"Press T to take the silver key.\n" +
					"Press R to return to the door.";
			if (Input.GetKeyDown (KeyCode.T)) {
				keyA = true;
				myState = States.keyA_room;
			} else if (Input.GetKeyDown (KeyCode.R)) {
				myState = States.locked_door;
			}
		}
	}	
	void dark_area () {
		string dark_area_text = "You unlock the door, step in, and without considering " +
			"it, let the door close behind you. That was a mistake, for there " +
			"is no handle on the door, nor light in the room save for a small " +
			"brazier barely lit to your left. It seems like a cavernous area.\n\n" +
				"Press F to walk forward.";
		if (unlit_torch) {
			dark_area_text += "\nPress L to light the torch.";
		}
		textBox.text = dark_area_text;
		if (Input.GetKeyDown (KeyCode.F)) {
			myState = States.pit_death;
		} else if (Input.GetKeyDown (KeyCode.L) && unlit_torch) {
			myState = States.brazier;
		}
	}	
	void pit_death () {
		textBox.text = "You walk forward in the dark, then suddenly lose your " +
			"footing. You fall for some time, heart racing, thinking about " +
			"where you may land and if you will make it out alive.\nAt 10 " +
			"seconds, you begin to scream.\nAt 20 seconds, you feel like " +
			"you've been screaming for an eternity.\n" +
			"Without warning, the wind stops, your body cracks... and " +
			"then there is nothing.\n\n" +
				"Press P to play again.";
		if (Input.GetKeyDown (KeyCode.P)) {
			initializeVariables();
			myState = States.grove;
		}
	}	
	void unlit_torch_room () {
		if (unlit_torch) {
			textBox.text = "The torch sconce in the stone wall is now empty.\n\n" +
					"Press R to return to the locked door.";
			if (Input.GetKeyDown (KeyCode.R)) {
				myState = States.locked_door;
			}
		} else {
			textBox.text = "At the end of this path, you run into what looks " +
				"like a wooden club mounted into a wall and wrapped on one end " +
				"with a gasoline-drenched cloth.\n\n" +
					"Press T to take the torch.\n" +
					"Press R to return to the locked door.";
			if (Input.GetKeyDown (KeyCode.T)) {
				unlit_torch = true;
				myState = States.unlit_torch_room;
			} else if (Input.GetKeyDown (KeyCode.R)) {
				myState = States.locked_door;
			}
		}
	}	
	void brazier () {
		if (unlit_torch) {
			textBox.text = "You stick the clothed end of the torch in the dying " +
				"flames. As soon as you do, the embers of the brazier die out. " +
				"You'd better not wait too long to find another torch or " +
				"brazier.\n\n" +
					"Press C to continue.";
			if (Input.GetKeyDown (KeyCode.C)) {
				myState = States.lit_torch_room;
			} else {
				textBox.text = "The brazier's flame is dead and its fuel spent. Only " +
					"your torch remains alight.\n\n" +
						"Press R to return to the antechamber.";
				if (Input.GetKeyDown (KeyCode.R)) {
					myState = States.room_with_a_pit;
				}
			}
		}
	}

	// SECTION 4 FUNCTIONS
	
	void lit_torch_room () {
		textBox.text = "As soon as you light it, the flame on your torch emblazons " +
			"the area, showing faint glimmerings of a vast antechamber to an " +
			"ancient temple.\n\n" +
				"Press W to walk forward.";
		if (Input.GetKeyDown (KeyCode.W)) {
			myState = States.room_with_a_pit;
		}
	}	
	void room_with_a_pit () {
		textBox.text = "Walking to the middle of the chamber, a precarious " +
			"pit looms before you, taking up most of the space in the rest " +
			"of the room. It appears to have no bottom or purpose. However, " +
			"a narrow walkway to the side of the pit should allow you to " +
			"continue on, though its end appears to shapeshift magically.\n\n" +
				"Press C to continue walking.\n" +
				"Press R to return to the brazier.";
		if (Input.GetKeyDown (KeyCode.C)) {
			if (randomChoice <= 1) {
				myState = States.dragon;
			} else {
				myState = States.trap_floor_die;
			}
		} else if (Input.GetKeyDown (KeyCode.R)) {
			myState = States.brazier;
		}
	}	
	void trap_floor_die () {
		textBox.text = "Today is not your lucky day. Due to the shifting " +
			"magicks in the area, the floor beneath you has been laden with " +
			"traps. Not knowing this, you step on a button which drops " +
			"the entirety of the temple upon your narrow little head.\n" +
			"After a few distant rumblings, the stone collapses from above, " +
			"killing you instantly.\n\n" +
				"Press P to play again.";
		if (Input.GetKeyDown (KeyCode.P)) {
			initializeVariables();
			myState = States.grove;
		}
	}	
	void dragon () {
		textBox.text = "You walk down the magical walkway and are instantly " +
			"transported to what looks like a large icy tomb. The air is " +
			"frigid and dry.\nWithout warning, a large serpentous beast " +
			"bellows before you, threatening your very life. It's a dragon!!\n\n" +
				"Press S to attack it with your sword!\n" +
				"Press T to throw your torch at it!\n" +
				"Press R to run for your life!";
		if (Input.GetKeyDown (KeyCode.S)) {
			myState = States.dragon_sword_death;
		} else if (Input.GetKeyDown (KeyCode.T)) {
			myState = States.dragon_tail_death;
		} else if (Input.GetKeyDown (KeyCode.R)) {
			myState = States.locked_room;
		}
	}	
	void dragon_sword_death () {
		textBox.text = "You brandish your sword, but the dragon seems " +
			"unfased. Its great big maw opens wide, revealing a hint of " +
			"blue flame. In a flash, a torrent of bright blue fire " +
			"consumes you, freezing you from the outside in and blowing " +
			"out your torch. The dragon bites into you, cracking you into " +
			"a million little pieces in the process.\n\n" +
				"Press P to play again.";
		if (Input.GetKeyDown (KeyCode.P)) {
			initializeVariables();
			myState = States.grove;
		}
	}	
	void locked_room () {
		string locked_room_text = "You turn around and see a strange door about " +
			"30 paces away with no pit in between. In a panic and with " +
				"no time to think about the implications of whatever " +
				"must have changed the room behind you, you run directly " +
				"for the door.\n";
		if (keyB) {
			locked_room_text += "The key you got from the crocodile is the " +
				"first you try in its lock, and thankfully, it works!\n\n" +
				"Press C to continue.";
			textBox.text = locked_room_text;
			if (Input.GetKeyDown (KeyCode.C)) {
				myState = States.win;
			}
		} else {
			locked_room_text +=	"The door is locked and the key you have " +
				"doesn't work! Before you can turn around, the dragon " +
				"catches up... and in an instant you are turned into ice.\n\n" +
					"Press P to play again.";
			textBox.text = locked_room_text;
			if (Input.GetKeyDown (KeyCode.P)) {
				initializeVariables();
				myState = States.grove;
			}
		}
	}	
	void win () {
		textBox.text = "You open the door and slam it shut behind you in just " +
			"enough time to feel the dragon's icy blue breath fly through the " +
			"seams. Turning around, you glimpse a room full of glorious " +
			"treasures, gold coins, and priceless gems! Most importantly, " +
			"however, is a staircase on the other side that could possibly " +
			"lead you home.\n\n" +
			"CONGRATULATIONS! You've completed Level 1!\n\n" +
			"Press C to continue.";
		if (Input.GetKeyDown (KeyCode.C)) {
			// change later to go to a new level (i.e. a new scene)
			initializeVariables();
			myState = States.grove;
		}
	}	
	void dragon_tail_death () {
		textBox.text = "You throw your torch at the dragon, causing it to " +
			"shriek in pain and begin turning around to flee in fear.\nThis " +
			"is good! You feel a great sense of relief... until you see its " +
			"incredibly long tail whip in your direction. At the very end " +
			"of it appears a perfectly symmetrical floret of clear blue " +
			"crystals - beautiful to behold until you realize they're flying " +
			"right at you.\n" +
			"With no time to react, the crystals slam you into a wall and " +
			"impale you a dozen different ways. You are dead.\n\n" +
				"Press P to play again.";
		if (Input.GetKeyDown (KeyCode.P)) {
			initializeVariables();
			myState = States.grove;
		}
	}

} // end of file
