// Edit copy, media, and links here. Asset paths are relative to index.html.
const onlySNSD = "https://onlysnsd1.blogspot.com/?m=1";

window.portfolio = {
  heroImage: "assets/retro-crt.webp",
  companion: true, // animated chibi cat in companion.js; set to false to hide it
  intro: "Deema Almanea · XR / VR developer and AI agent developer.",
  profile: {
    role: "XR / VR · AI agents",
    bio: "I’m an XR and VR developer and an AI agent developer studying Artificial Intelligence at Princess Nourah bint Abdulrahman University. I build interactive experiences in Unity and experiment with hardware that connects physical controls to digital environments. My creative work spans UI and web design, photo and video editing, and translation, with close attention to wording, subtitle timing, and synchronization.",
    portrait: "",
    cv: "assets/deema-almanea-cv.pdf"
  },
  projects: [
    {
      name: "Firefighters VR", category: "Multiplayer VR · IoT",
      video: "assets/firefighters-trailer.mp4", videoPoster: "assets/firefighters-trailer-poster.jpg", videoSize: [848, 464],
      videoLabel: "Firefighters VR trailer", videoCaption: "",
      videoCredit: "Trailer created and edited by me :>",
      image: "assets/firefighters-multiplayer-station.webp",
      alt: "Firefighters VR dispatch workstation from the player's point of view",
      summary: "A two-player emergency-response game with a physical steering wheel and an Arduino alarm light.",
      description: "Firefighters VR turns an emergency call into a cooperative mission. One player handles dispatch and the hose while the other drives the truck with a physical steering wheel.",
      skills: ["Unity XR", "Multiplayer", "World-building", "Spatial interfaces", "Audio and transitions", "Arduino"],
      sections: [
        { title: "The call comes in", text: "The crew begins in the fire-station lobby, where the dispatch screen gives the briefing and each player has a workstation. Once the first player accepts the call, the alarm sounds and an external light at the wheel turns on. A loading scene takes the crew from the station into the mission.", shots: [
          { image: "assets/firefighters-multiplayer-station.webp", alt: "Dispatch briefing and Station Blue monitor from the player's point of view", caption: "Inside the multiplayer lobby, looking toward Station Blue." }
        ] },
        { title: "On the road", text: "The second player drives the fire truck through the city with a real steering wheel. The first player checks the incident location on an in-game tablet and guides the driver to the address. The station, truck, and house were refined as connected parts of the same world.", shots: [
          { image: "assets/firefighters-truck-night.webp", alt: "Yellow fire truck with blue and red light markers on a night street in the Unity Scene view", caption: "The fire truck on the night route, with its emergency lights placed in the Unity Scene view." },
          { image: "assets/firefighters-night-street.webp", alt: "Street-level view of a lit city road at night with parked cars and office buildings", caption: "Street level on the driving route through the night city." }
        ] },
        { title: "At the scene", text: "When the truck arrives, the driver works the hose reel while the other player takes the hose to the fire. Solo play lets a bot take the other part of the mission, with the option to switch between driver and firefighter." },
        { title: "From simulation to player insights", text: "The game saves player records and mission completion times to a Firebase Realtime Database. A web dashboard we built presents these results, ranks every crew by total time, and highlights the fastest runs, extending the experience beyond the headset. The results refresh automatically, and the dashboard includes a live view designed to follow a mission while a crew is playing.", shots: [
          { image: "assets/firefighters-dashboard.webp", alt: "Firefighters VR operations dashboard showing the fastest-crew record of 03:16 with no penalties, mission stats, and the ranked list of all crews", caption: "The live leaderboard's overview, with the record for the fastest crew. Player names are blurred in this screenshot." }
        ], links: [
          { label: "View Live Leaderboard", url: "https://fire-fighters-vr.web.app/" }
        ] }
      ],
      behindScenes: [
        { image: "assets/fire-alarm-board.webp", alt: "Red alarm beacon wired to a soldered board beside the steering wheel", caption: "The alarm prototype on the bench. We soldered the Arduino circuit and wrote code to switch the red beacon on when the in-game alarm fires." },
        { image: "assets/fire-hardware-bench.webp", alt: "Logitech steering wheel, circuit board, and Meta Quest equipment on a workbench", caption: "Testing the physical setup with a steering wheel, Quest hardware, and the alarm circuit." },
        { image: "assets/firefighters-multiplayer-lobby.webp", alt: "Unity Scene view of the dispatch and player workstation screens", caption: "In Unity, arranging the dispatch and workstation screens inside the fire-station lobby." },
        { image: "assets/firefighters-night-city.webp", alt: "Aerial view of the night city with streets, street lights, and tall buildings in Unity", caption: "The night city from above in Unity while assembling the driving environment." }
      ],
      links: [{ label: "Download APK · GitHub Release", url: "https://github.com/HarribelSA/Fire-Fighters-Multiyplayer-VR/releases/tag/v1.0.1" }]
    },
    {
      name: "Musical VR", category: "Headset VR · Rhythm game",
      video: "assets/musical-gameplay.mp4", videoCaption: "Headset gameplay · lobby, song selection, rhythm stage, and results.",
      image: "assets/musical-rhythm.webp", alt: "Turquoise and purple crystals on a neon rhythm runway",
      summary: "A Japanese-inspired VR rhythm game with a sakura village lobby and playable drum and piano lessons.",
      description: "Musical VR brings a rhythm arcade and two instrument classrooms into a Japanese-inspired village. From the headset lobby, three torii portals lead to rhythm, drums, and piano.",
      skills: ["Unity VR", "Python note analysis", "Rhythm charting", "Directional hit detection", "Scoring and feedback", "Instrument interaction"],
      sections: [
        { title: "Choose a portal", text: "The starting village brings together sakura trees, old-style houses, and three lit gates. The center gate leads to the rhythm stage. The side gates lead to instrument lessons, and the lobby keeps song scores and personal bests available between sessions.", shots: [
          { image: "assets/musical-lobby.webp", alt: "Rhythm and drums torii portals in the headset lobby", caption: "The rhythm and drums gates from inside the headset." }
        ] },
        { title: "Read the beat and swing", text: "Three songs each have Easy, Normal, and Hard charts based on notes analyzed in Python. The left purple fan hits purple crystals, and the right turquoise fan hits turquoise ones. The direction and timing of the hit shape the Perfect, Good, or Miss feedback. Sakura petals get in the way, and hitting a bomb resets the score.", shots: [
          { image: "assets/musical-rhythm.webp", alt: "Incoming crystal notes, combo, and live score in Musical VR", caption: "The rhythm stage with live score, combo, and approaching crystals." },
          { image: "assets/musical-results.webp", alt: "Musical VR results showing an A rank and personal-best feedback", caption: "The end-of-song results and personal-best feedback." }
        ] },
        { title: "Learn an instrument", text: "The drums portal teaches each drum before a practice song sends color-coded cues toward it. The piano portal teaches its keys and then asks the player to follow a note sequence. The accuracy of the piano keys received positive feedback from a coach at Tuwaiq’s Emerging Worlds and Technologies bootcamp.", shots: [
          { image: "assets/musical-piano.webp", alt: "Color-coded piano keys and virtual pointers inside Musical VR", caption: "Testing the piano keys and colored prompts from inside the headset." }
        ] }
      ],
      behindText: "The song notes were analyzed in Python and organized into three difficulty charts per song. In Unity, the rhythm charts drive the crystal sequence, while hit direction and timing drive the scoring feedback. The instrument classrooms split key or drum practice from following cues at song tempo.",
      links: []
    },
    {
      name: "AR Racing", category: "Mobile AR · Time trial",
      video: "assets/ar-racing-gameplay.mp4", videoCaption: "Mobile gameplay · timed runs, the second turn, and the final leaderboard.",
      image: "assets/ar-timed-race.webp", alt: "A car rounds a corner on the AR racing track with the timer running",
      summary: "A two-player time trial on a custom racetrack placed on the floor through the phone camera.",
      description: "AR Racing turns the floor into a tabletop-scale track. Two players take turns racing on the same course, then compare their times.",
      skills: ["Unity XR", "Mobile AR plane detection", "Track layout", "Vehicle controls", "Colliders", "Race UI"],
      sections: [
        { title: "Place the track and choose a car", text: "The phone camera detects the floor, and the custom track appears on the detected plane. Player one opens the race flow and cycles through the available cars before confirming a choice.", shots: [
          { image: "assets/ar-car-selection.webp", alt: "Blue car at the starting grid above the car-selection controls", caption: "Car selection at the starting grid, captured from the mobile game." }
        ] },
        { title: "Race against the clock", text: "A start sound cues the first run. Steering and pedal controls stay on screen while the timer counts up. Crossing the finish-line collider records the time and hands the next run to player two.", shots: [
          { image: "assets/ar-timed-race.webp", alt: "Yellow car on a red-and-white racetrack with a timer and touch controls", caption: "Mid-race with the timer and touch controls visible." }
        ] },
        { title: "Compare the runs", text: "After both runs the dashboard lists each finish time and names the fastest car. In this recorded session, Car 02 wins with 22.45 seconds.", shots: [
          { image: "assets/ar-leaderboard.webp", alt: "Race leaderboard showing Car 02 at 22.45 seconds and Car 01 at 26.07 seconds", caption: "The results dashboard after both turns." }
        ] }
      ],
      behindScenes: [
        { image: "assets/ar-unity-car.webp", alt: "Car selected at the starting line in the Unity editor", caption: "Positioning and scaling a car at the starting grid in Unity, beside the track barriers and finish triggers." },
        { image: "assets/ar-interface-reference.webp", alt: "Photo of the mobile racing screen with enlarged graphic control samples", caption: "A reference sheet for Select Car, Start Race, and steering buttons over a phone test." },
        { image: "assets/ar-workshop.webp", alt: "Laptop displaying the racing track during a workshop", caption: "Checking the track layout on the workshop laptop." }
      ],
      links: []
    },
    {
      name: "SATAR", category: "Team project · Arabic NLP / Arabthon",
      image: "assets/satar-cover.webp", alt: "SATAR team poster title and Arabthon track",
      summary: "An Arabthon project that restores punctuation to Arabic text using linguistic context.",
      description: "Our team worked in the Modern Standard and Classical Arabic track. We fine-tuned a pretrained Arabic language model to add punctuation while preserving the meaning of the original text.",
      skills: ["Arabic NLP", "Fine-tuning", "Text normalization", "Model testing"],
      sections: [
        { title: "Method and example", text: "The team used prompts and guidance on punctuation, then trained and tested the model on the restoration task. The poster shows the input «كيف حالك» becoming «كيف حالك؟». The proposed next steps were to expand the training data and handle longer, more complex text." }
      ],
      gallery: [{ image: "assets/satar-poster.webp", alt: "Original SATAR poster explaining the punctuation model, workflow, example, and results", caption: "Original Arabthon team poster" }],
      links: []
    },
    {
      name: "Smart Parking System", category: "Course team project · Java / JavaFX",
      image: "assets/parking-output.webp", alt: "JavaFX parking form showing a confirmed reservation and receipt with the assigned space, fee and payment status",
      summary: "A Java application for tracking vehicles, parking reservations, and payments.",
      description: "Our CS111 team built a parking application for cars, trucks, and buses. It supports registration, available-slot lookup, reservations, and payments.",
      skills: ["Java", "JavaFX", "Object-oriented design", "UML", "Reservation logic"],
      report: "assets/smart-parking-system.pdf",
      sections: [
        { title: "Reservation output", text: "After confirming a reservation, the JavaFX interface shows the assigned parking space, booking times, fee, and payment status in the receipt log.", shots: [
          { image: "assets/parking-output.webp", alt: "Confirmed reservation, assigned slot F1-C1, fee 9.50 SAR, and a paid receipt in the JavaFX app", caption: "Actual JavaFX output from the original report. The ID and phone fields are hidden in this crop." }
        ] },
        { title: "Implementation", text: "The project used a ParkingManager to coordinate slots and reservations, LocalDateTime for booking times, and object-oriented design for vehicle-specific rules and fee calculation. The report also describes integrating JavaFX with the application logic." }
      ],
      gallery: [{ image: "assets/parking-diagram.webp", alt: "Smart Parking System class diagram from the course presentation", caption: "Class diagram from the original presentation" }],
      links: []
    },
    {
      name: "Sonic AR", category: "Unity · Image-target AR",
      summary: "A Sonic image target brings a 3D character and collectible coins into an AR scene.",
      description: "A small Unity AR game starts when the camera recognizes a Sonic image target. Sonic appears in 3D with a trail of coins ahead. The player guides him with arrow controls, and a scripted pickup collects each coin on contact.",
      skills: ["Unity AR", "Image targets", "3D character movement", "Pickup scripting"],
      links: []
    },
    {
      name: "RO-MEDIC", category: "Healthcare · Concept study",
      summary: "An early paper concept for an AI-guided first-aid kit.",
      description: "RO-MEDIC explored how a smart first-aid kit might guide users through an emergency. The work reached the concept stage.",
      skills: ["Concept development", "Healthcare UX"],
      links: []
    }
  ],
  archive: [
    {
      name: "Only SNSD", category: "Web publishing · Arabic subtitles",
      image: "assets/only-snsd-home.webp", alt: "Only SNSD homepage showing its banner, Arabic navigation, and Yoo Quiz post",
      summary: "An SNSD fan hub I customized on Blogger, with Arabic-subtitled Korean variety episodes.",
      description: "Only SNSD brings the site and the subtitling work together. I customized the Blogger site to give fans a home for Arabic-subtitled Korean variety shows and published the finished releases on dedicated show pages.",
      skills: ["Blogger customization", "Web publishing", "Korean-to-Arabic subtitling", "Aegisub timing"],
      sections: [
        { title: "Building the web archive", text: "I adapted the Blogger site for a fan audience and organized translated releases into show posts. The posts give viewers a single place to find release details and episode links." },
        { title: "Translation and timing", text: "I translated Korean dialogue into Arabic, broke it into readable subtitle lines, set their start and end cues against the audio, and previewed playback to check that the words landed with the speech. My wider localization work includes over 50 translated, timed, and published episodes.", arabicExample: "هل سنفعل هذا معًا؟", shots: [
          { image: "assets/aegisub-workflow.webp", alt: "Recreated Aegisub timing workspace showing an audio waveform, selected start and end markers, and three sample subtitle lines", caption: "Illustrative Aegisub workflow reconstruction. Sample cues show how one subtitle line is timed to a segment of speech and checked in preview." }
        ], links: [
          { label: "Yoo Quiz on the Block · Arabic-subtitled release", url: "https://onlysnsd1.blogspot.com/2022/07/yoo-quiz-on-block.html" },
          { label: "Soshi Tam Tam · Arabic-subtitled episodes", url: "https://onlysnsd1.blogspot.com/2022/07/blog-post.html" }
        ] }
      ],
      links: [{ label: "Visit Only SNSD", url: onlySNSD }]
    }
  ],
  lab: {
    intro: "Connecting virtual experiences to physical inputs and signals.",
    image: "assets/fire-alarm-board.webp",
    alt: "Soldered Arduino alarm circuit with a red beacon and steering-wheel base",
    topics: [
      { title: "Arduino alarm light", text: "For Firefighters VR, our team soldered an Arduino circuit and wrote code to switch on an external light at the steering wheel when the game alarm goes off." },
      { title: "Physical steering in VR", text: "The driver's role uses a real steering wheel to drive the emergency vehicle through the virtual environment." }
    ]
  },
  contact: {
    phone: "+966 53 332 0284",
    email: "Deemalmane3@gmail.com",
    links: [{ label: "GitHub", url: "https://github.com/DeemaTM" }],
    message: "For collaborations and conversations about XR, interface design, and creative technology."
  }
};
