using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class TextController : MonoBehaviour {

	public Text textBox;

	// comments about the line above: public Text textBox;
		//
		// textBox is a variable! We will use it to modify the text element
			// in our Hierarchy
		//
		// public is an access modifier which says that the variable textBox
			// is able to be used outside of our script, in whatever other
			// program (like Unity) wants to use it.
		//
		// textBox is a variable of type/class Text, and the Text class comes
			// from the UnityEngine.UI script or class or module.

	private enum States {start, grove, lake_ground, lake_water, 
							underwater_opening, underwater_cave, 
							sword_in_stone, sword_in_hand, 
							dark_expanse, drown};

	private States myState;
	private bool sword;
	private bool torch;
	private bool keyA;
	private bool keyB;

	// Use this for initialization
	void Start () {
		myState = States.start;
		sword = false;
		torch = false;
		keyA = false;
		keyB = false;
	}
	
	// Update is called once per frame
	void Update () {
		if 		(myState == States.start) 				{start();} 
		else if (myState == States.grove) 				{grove();} 
		else if (myState == States.lake_ground) 		{lake_ground();} 
		else if (myState == States.underwater_opening) 	{underwater_opening();}
		else if (myState == States.underwater_cave) 	{underwater_cave();} 
		else if (myState == States.sword_in_stone) 		{sword_in_stone();} 
		else if (myState == States.sword_in_hand) 		{sword_in_hand();} 
		else if (myState == States.dark_expanse) 		{dark_expanse();} 
		else if (myState == States.drown) 				{drown();} 
	}

	void start() {
		textBox.text = "Welcome to \"Text Adventure\"!\n\nPress any key " +
			"to continue....";
		if (Input.anyKey) {
			myState = States.grove;
		}
	}
	
	void grove() {
		textBox.alignment = TextAnchor.UpperLeft;
		textBox.text = "You find yourself in a sunny forest grove all " +
			"of a sudden. What happened to get you you here? Why are you " +
				"here? Let's find out!\n\nPress N to go North.\nPress E " +
				"to go East.\nPress S to go South.";
		if (Input.GetKeyDown (KeyCode.N)) {
			myState = States.lake_ground;
		}
	}
	
	void lake_ground () {
		textBox.text = "After a short walk, you find yourself on the " +
			"bank of a large, crystal blue lake. There appears to be " +
				"something dark inside it near your position. Maybe it's " +
				"a secret underwater passage?\n\nPress D to dive in.\n" +
				"Press S to go South.";
		if (Input.GetKeyDown (KeyCode.D)) {
			myState = States.underwater_opening;
		}
	}
	
	void underwater_opening() {
		textBox.text = "You dive into the lake and swim into it a bit. " +
			"Soon, you come across a dark opening in a ridgeside leading " +
				"into a cave.\n\nPress E to enter the opening.\n\nPress P to " +
				"move past the opening.";
		if (Input.GetKeyDown (KeyCode.E)) {
			myState = States.underwater_cave;
		} else if (Input.GetKeyDown (KeyCode.P)) {
			myState = States.dark_expanse;
		}
	}
	
	void underwater_cave () {
		textBox.text = "The cave is dark, danky, and silent. As you say " +
			"\"Hello!\" into the void, your echo comes back far too " +
				"late....\n\nPress F to move forward.\n\nPress E to exit " +
				"the cave.";
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
					"- this may not be Earth.\n\nPress P to pull out the " +
					"\"sword\".\n\nPress R to return to the cave.";
			if (Input.GetKeyDown (KeyCode.P)) {
				sword = true;
				myState = States.sword_in_hand;
			} else if (Input.GetKeyDown (KeyCode.R)) {
				myState = States.underwater_cave;
			}
		} else {
			textBox.text = "The stone is empty.\n\nPress R to return to " +
				"the cave.";
			if (Input.GetKeyDown (KeyCode.R)) {
				myState = States.underwater_cave;
			}
		}
	}
	
	void sword_in_hand () {
		textBox.text = "After a short while struggling, you pulled out " +
			"the sword! Good job. Now all you have to worry about is " +
				"tetanus.\n\nPress R to return to the cave.";
		if (Input.GetKeyDown (KeyCode.R)) {
			myState = States.underwater_cave;
		}
	}
	
	void dark_expanse () {
		textBox.text = "You've been swimming for a while and it's " +
			"getting hard to breathe. Still, you want to go further, " +
			"and an intriguing stretch of pure and unfathomable darkness " +
			"appears before you.\n\nPress U to swim back up.\n\nPress D " +
			"to swim further down.";
		if (Input.GetKeyDown (KeyCode.U)) {
			myState = States.lake_water;
		} else if (Input.GetKeyDown (KeyCode.D)) {
			myState = States.drown;
		}
	}

	void drown () {
		textBox.text = "Whoops! You drowned.\n\nPress any key to play " +
			"again.";
		if (Input.anyKey) {
			myState = States.start;
		}
	}

}
