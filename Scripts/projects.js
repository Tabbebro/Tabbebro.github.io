const projects = [
    // ==============================================
    { // Shattered Bride
        title: "Shattered Bride",
        image: "images/projects/SB/SB_thumb.png",
        video: "",
        gallery: [
            "images/projects/SB/SB_settings.gif",
            "images/projects/SB/SB_pause.gif"
        ],
        engine: "Unity",
        engineIcon: "images/icons/unity.svg",
        platform: "PC",
        status: "Released",
        storeIcon: "images/icons/steam.svg",
        description: {
            overview: "Project I helped with while dealing with personal issues",
            role: "UI Programmer",
            contributions:[
                "Menu systems"
            ],
            learnings: [
                "What it takes to put a game into Steam",
                "What happens to a game when you do not market you big project"
            ]
        },
        link: "https://store.steampowered.com/app/3565320/Shattered_Bride/",
        isGameJam: false
    },
    // ==============================================
    { // Time Thrall
        title: "Time Thrall",
        image: "images/projects/TimeThrall/TT_Thumb.png",
        video: "",
        gallery: [
            "images/projects/TimeThrall/TT_Settings.gif",
            "images/projects/TimeThrall/TT_MissionSelect.gif"
        ],
        engine: "Unity",
        engineIcon: "images/icons/unity.svg",
        platform: "PC",
        status: "Unreleased",
        storeIcon: "images/icons/no.svg",
        description: {
            overview: "Project I worked on during my internship at Need More Bullets",
            role: "UI Programmer",
            contributions:[
                "Comprehensive menu system",
                "Level selection UI",
                "Simple shaders"
            ],
            learnings: [
                "Key rebinding in Unity",
                "How it feels to abandon a project and never see it to publish"
            ]
        },
        link: "",
        isGameJam: false
    }, 
    // ==============================================
    { // Arena Shooter Supreme
        title: "Arena Shooter Supreme",
        image: "images/projects/Ass/Ass_Thumb.png",
        video: "https://www.youtube.com/watch?v=Dj-zhB-nb-c",
        gallery: ["images/projects/Ass/Ass_Settings.gif"],
        engine: "Unreal Engine 5",
        engineIcon: "images/icons/unreal.svg",
        platform: "PC",
        status: "Unreleased",
        storeIcon: "images/icons/no.svg",
        description: {
            overview: "First Unreal Engine project",
            role: "UI Programmer",
            contributions:[
                "Menus",
                "HUD",
                "Custom key rebind (because Unreals didn't work as I wanted it to)",
            ],
            learnings: [
                "Unreal Engine's Widget system for UI",
                "How to rebind keys in Unreal Engine"
            ]
        },
        link: "",
        isGameJam: false
    },
    // ==============================================
    { // Sunescape
        title: "Sunescape",
        image: "images/projects/Sunescape/Sunescape_Thumb.png",
        video: "https://www.youtube.com/watch?v=4knk4XQ4yzo",
        gallery: [
            "images/projects/Sunescape/Sunescape_LevelSelect.gif",
            "images/projects/Sunescape/Sunescape_HUD.gif",
            "images/projects/Sunescape/Sunescape_Inventory.gif"
        ],
        engine: "Unity",
        engineIcon: "images/icons/unity.svg",
        platform: "PC",
        status: "Released (Itch.io)",
        storeIcon: "images/icons/itch.svg",
                description: {
            overview: "Summer course project that we entered Assembly Summer 2023 GameDev competition with",
            role: "UI Programmer",
            contributions:[
                "Mission selection screen",
                "Inventory system",
                "Player HUD"
            ],
            learnings: [
                "How to make a modular inventory from a basic tutorial",
                "How to make HUD work in tandem with inventory"
            ]
        },
        link: "https://rockatana.itch.io/sunescape",
        isGameJam: false
    },
    // ==============================================
    { // MehuSim
        title: "MehuSim (VR)",
        image: "images/projects/Mehu/Mehu_Thumb.png",
        video: "",
        gallery: [
            "images/projects/Mehu/Mehu_Gun.gif",
            "images/projects/Mehu/Mehu_Radio.png",
            "images/projects/Mehu/Mehu_TV.gif",
        ],
        engine: "Unity",
        engineIcon: "images/icons/unity.svg",
        platform: "Virtual Reality",
        status: "Released (Itch.io)",
        storeIcon: "images/icons/itch.svg",
                description: {
            overview: "First VR Project for a course where we had to learn a new tech",
            role: "Side Content Programmer",
            contributions:[
                "Interactive television & radio",
                "Functional \"Buff™\" toy gun",
                "A rat that navigates around the player's apartment",
                "A growing plant that bears fruit to be used in the making of \"mehu\" (juice)"
            ],
            learnings: [
                "VR development",
                "Building & optimizing for VR",
                "How to use render textures"
            ]
        },
        link: "https://kuuttisnu.itch.io/mehusim",
        isGameJam: false
    },
    // ==============================================
    { // Moo Moo Madness
        title: "Moo Moo Madness",
        image: "images/projects/MooMoo/MooMoo_Thumb.png",
        video: "https://www.youtube.com/watch?v=mcR8qXMg--8",
        gallery: ["images/projects/MooMoo/MooMoo_Store.gif"],
        engine: "Unity",
        engineIcon: "images/icons/unity.svg",
        platform: "Mobile",
        status: "Released (Play Store)",
        storeIcon: "images/icons/playstore.svg",
                description: {
            overview: "First mobile project",
            role: "UI Programmer",
            contributions:[
                "In-game store",
                "Settings menu",
                "Cow skin implementation"
            ],
            learnings: [
                "Limitations of mobile games",
                "How to save values to playerprefs",
                "Making of a basic store for a game",
                "Hastle of putting and keeping a game in Play Store"
            ]
        },
        link: "https://play.google.com/store/apps/details?id=com.KulkuriGames.MooMooMadness&hl=en_US",
        isGameJam: false
    },
    // ==============================================
    { // Entitled Roguelike Project (ERP) 
        title: "Entitled Roguelike Project (ERP)",
        image: "images/projects/Erp/Erp_Thumb.png",
        video: "https://www.youtube.com/watch?v=Dxxz_jARpOI",
        gallery: [
            "images/projects/Erp/ERP_Menu.gif",
            "images/projects/Erp/ERP_Enemies.gif",
            "images/projects/Erp/ERP_Weapons.gif"
        ],
        engine: "Unity",
        engineIcon: "images/icons/unity.svg",
        platform: "PC",
        status: "Released (Itch.io)",
        storeIcon: "images/icons/itch.svg",
                description: {
            overview: "First long game project (3 months)",
            role: "UI & Gameplay Programmer",
            contributions:[
                "UI",
                "Modified already made weapon system to make different weapons",
                "Enemies from scratch"
            ],
            learnings: [
                "Gameplay systems other than UI",
                "Basics of saving values",
                "Usage of Interfaces",
                "What is A*, but didn't get to implement"
            ]
        },
        link: "https://hunts.itch.io/erp",
        isGameJam: false
    },
    // ==============================================
    { // Shank Simulator
        title: "Shank Simulator",
        image: "images/projects/Shank/Shank_Thumb.png",
        video: "https://www.youtube.com/watch?v=4w3ZihBLtO4",
        gallery: ["images/projects/Shank/Shank_Settings.gif"],
        engine: "Unity",
        engineIcon: "images/icons/unity.svg",
        platform: "PC",
        status: "Released (Itch.io)",
        storeIcon: "images/icons/itch.svg",
        description: {
            overview: "The first game project",
            role: "UI Programmer",
            contributions:[
                "UI",
                "Majority of menu art"
            ],
            learnings: [
                "Basics of Unity",
                "Basics of canvas based UI"
            ]
        },
        link: "https://hunts.itch.io/shank-simulator",
        isGameJam: false
    },
    /*
    // ==============================================
    { // Empty
        title: "",
        image: "images/projects/",
        video: "",
        gallery: [""],
        engine: "",
        engineIcon: "",
        platform: "",
        status: "",
        storeIcon: "",
                description: {
            overview: "",
            role: "",
            contributions:[
                "",
            ],
            learnings: [
                "",
            ]
        },
        link: "",
        isGameJam: false
    }
    */
]