let isTrad = false

function trad() {
    if (!isTrad) {
        document.querySelector("#Nom").innerText = "Name"
        document.querySelector("#Prenom").innerText = "first-Name"
        document.querySelector("#Poste").innerText = "Job"
        document.querySelector("#Poste1").innerText = "Web Develloper"
        document.querySelector("#Adresse").innerText = "adress"
        document.querySelector("#Tel").innerText = "Phone"
        document.querySelector("#Langue").innerText = "Language"
        document.querySelector("#Langue1").innerText = "French-english"
    
        let nav = document.querySelectorAll(".nav-link")
        let navLink = ["About", "competence", "experience", "learn", "contact"]
        for (let i = 0; i < nav.length; i++) {
            nav[i].innerText = navLink[i]
            
        }
    
        document.querySelector("#about").innerText = "About Me"
        document.querySelector(".margin-b").innerHTML = "Hello, I am Vincent Gotta, born in TOULON on 07/21/95 <br>Professional, dynamic and creative, are the qualities that define me. <br>After 6 years of experience in the Private Security sector, I am currently atthelooking for new challenges.<br>During my apprenticeship at the RI7 school in Aubagne, I was able to acquireskills in HTML, CSS, JAVASCRIPT and PHP. <br>I would like to take advantage of my experience acquired during my training inWeb Designer/Developer at the service of a company. <br>develop my skills in HTML, CSS, JAVASCRIPT and PHP"
    
        let tab = document.querySelectorAll(".tab1")
        let tabTrad = ["team works", "comunication", "Responsibility", "Honesty", "Active listening" ,"empathy", "Collaboration", "first aid management", "Choking", "Bleeding", "Unconsciousness", "heart disease", "first aid actions", "defibrillation", "Conflict management", "Know and identify the types of conflict", "Identify and manage difficult behaviors", "Create conditions conducive to cooperation", "Deploy emotional intelligence", "Managing the exit from conflict", "PC Security Management", "Alert your hierarchy wisely", "Analyze situations and behaviors in playrooms.", "Analyze a recorded tape by isolating the significant facts.", "Anticipate malfunctions and incidents.", "Decipher the meaning of an image or a sound."]
        for (let i = 0; i < tab.length; i++) {
            tab[i].innerText = tabTrad[i]       
        }
        
        document.querySelector("#Exp").innerText = "Experiences Professional"
        
        let reste = document.querySelectorAll(".trad")
        let resteTrad = ["Store/Guard/Event Security Officers", "Store fire safety officer", "Museum Fire Safety Officer", "Museum/Event/Store fire safety officers", "Safety training", "web development training"]
        for (let i = 0; i < reste.length; i++) {
            reste[i].innerText = resteTrad[i]
            
        }
        document.querySelector("#Contacter").innerText = "contact me"
    
    }else{
        
            document.querySelector("#Nom").innerText = "Nom"
            document.querySelector("#Prenom").innerText = "Prenom"
            document.querySelector("#Poste").innerText = "Poste"
            document.querySelector("#Poste1").innerText = "Développeur Web"
            document.querySelector("#Adresse").innerText = "adresse"
            document.querySelector("#Tel").innerText = "Telephone"
            document.querySelector("#Langue").innerText = "Langues"
            document.querySelector("#Langue1").innerText = "Français / Anglais technique-"
        
            let nav = document.querySelectorAll(".nav-link")
            let navLink = ["A propos", "Compétence", "Expérience", "Formation", "contact"]
            for (let i = 0; i < nav.length; i++) {
                nav[i].innerText = navLink[i]
                
            }
        
            document.querySelector("#about").innerText = "A propos de moi"
            document.querySelector(".margin-b").innerHTML = "Bonjour, je suis Vincent Gotta, né à TOULON le 21/07/95 <br>Professionnel, dynamique et créatif, sont les qualités qui me définissent. <br>Après 6 ans d’expériences dans le secteur de la Sécutité Privé, je suis actuellement à la recherche de nouveaux défis à relever. <br>Au cours de mon apprentissage au sein de l'école RI7 sur Aubagne, j'ai pu acquérir descompétences en HTML,CSS,JAVASCRIPT et PHP. <br>Je souhaiterai mettre à profit mon experience acquise au cours de ma formation deConcepteur/Développeur web au service d’une entreprise. <br>développer mes compétences en HTML, CSS, JAVASCRIPT et PHP."
    
            let tab = document.querySelectorAll(".tab1")
            let tabTrad = ["travail d'equipes", "comunication", "responsabilité", "honnêteté", "Ecoute active" ,"Empathie", "Collaboration", "Gestion de premier secours", "L'etouffement", "Le saignement", "L'inconsience", "Le malaise cardique", "Les geste de secours", "La defibrillation", "Gestion des conflits", "Connaitre et identifier les types de conflit", "Identifier et gérer les comportements difficiles", "Créer les conditions favorisant la coopération", "Déployer l'intelligence émotionnelle", "Gérer la sortie de conflit", "Gestion PC Sécurité", "Alerter sa hiérarchie à bon escient", "Analyser les situations et les comportements en salles de jeux.", "Analyser une bande enregistrée en isolant les faits significatifs.", "Anticiper les dysfonctionnements et incidents.", "Décrypter le sens d'une image ou d'un son."]
            for (let i = 0; i < tab.length; i++) {
                tab[i].innerText = tabTrad[i]       
            }
            
            document.querySelector("#Exp").innerText = "Expériences Professionnelles"
            
            let reste = document.querySelectorAll(".trad")
            let resteTrad = ["Agents de sécurité Magasin/Gardiennage/Evénementiel", "Agent de sécurité incendie magasin", "Agent de sécurité incendie Musée", "Agents de sécurité incendie Musée/Evénmentiel/Magasin", "Formation sécurité", "Formation développement web"]
            for (let i = 0; i < reste.length; i++) {
                reste[i].innerText = resteTrad[i]
                
            }
            document.querySelector("#Contacter").innerText = "contactez moi"
    }
    isTrad = !isTrad
} 
let isLight 
    function light() {
        if (isLight) {
            document.querySelector("link").href = "assets/Css/Style-light.css"
        } else {
            document.querySelector("link").href = "assets/Css/style.css"
    
        }
        isLight = !isLight
    }
 
