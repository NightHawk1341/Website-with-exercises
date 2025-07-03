/* Cette grosse partie contient le vocabulaire qui "traduit le site vers l'anglais et vice versa, ainsi que les informations sur le mode nuit.
La variable qui correspond au langage utilisée est gardée dans localStorage que permet de garder la langue en naviguant les pages.
Le mode nuit nuit fonctionne de meme façon que permet de garder l'uniformité des toutes les pages.
Les fonctions sont attachées aux boutons correspondants qui sont disponibles en haut sur nimporte quelle page du projet.
*/
$(document).ready(function() {
        const translations = {
            en: {
                title: "WELCOME TO THE CLASSROOM",
                nightmode: "NIGHT MODE",
                daymode: "DAY MODE",
                about: "ABOUT",
                backToMain: "Back to main page",
                previousExercise: "Previous exercise",
                nextExercise: "Next exercise",
                checkAnswers: "Check your answers",
                popupMessage: "This website was created by student Nikita Duzhenko as part of a web programming project.",
                exercises: "Exercises",
                progressionTitle: "Your Progress",
                doneTasks: "Completed Tasks: ",
                remainingTasks: "Remaining Tasks: ",
                comprOrale: "Listening Comprehension",
                articles: "Articles",
                vocabulary: "Vocabulary",
                theory: "Theoretical Questions",
                concordance: "Sequence of Tenses",
                optTrue: "True",
                optFalse: "False",
                optNull: "Select",
                cons1:"Exercise 1: ",
                cons2:"Exercise 2: ",
                cons3:"Exercise 3: ",
                cons4:"Exercise 4: ",
                cons5:"Exercise 5: ",
                cons1a:"Listen to the audio recording and fill in the gaps in the phrases",
                cons2a:"Choose the appropriate article",
                cons3a:"Drag the words into the empty spaces to associate them with each image",
                cons4a:"Answer the theoretical questions by selecting “true” or “false”",
                cons5a: "Drag the correct form of the verb into the empty spaces to complete each sentence correctly",
                quest1: "1. In French, all nouns have a gender: either masculine or feminine.",
                quest2: "2. The adjective in French always comes before the noun it describes.",
                quest3: '3. The past participle in French agrees in gender and number with the subject when used with the verb "être".',
                quest4: '4. The pronoun "ils" can refer to a mixed-gender group of people in French.',
                quest5: '5. The French negative structure "ne...pas" is placed around the conjugated verb.',
                restart: "Restart",
            },
            fr: {
                title: "BIENVENUE DANS LA SALLE DE CLASSE",
                nightmode: "MODE NUIT",
                daymode: "MODE JOUR",
                about: "À PROPOS",
                backToMain: "Page d'accueil",
                previousExercise: "Exercice précédent",
                nextExercise: "Exercice suivant",
                checkAnswers: "Vérifiez vos réponses",
                popupMessage: "Ce site web a été créé par l'étudiant Nikita Duzhenko dans le cadre d'un projet de programmation web.",
                exercises: "Exercices",
                progressionTitle: "Votre progression",
                doneTasks: "Taches accomplies : ",
                remainingTasks: "Taches restantes : ",
                comprOrale: "Compréhension orale",
                articles: "Articles",
                vocabulary: "Vocabulaire",
                theory: "Questions théoretiques",
                concordance: "Concordance de temps",
                optTrue: "Vrai",
                optFalse: "Faux",
                optNull: "Sélectionnez",
                cons1:"Exercice 1 : ",
                cons2:"Exercice 2 : ",
                cons3:"Exercice 3 : ",
                cons4:"Exercice 4 : ",
                cons5:"Exercice 5 : ",
                cons1a:"Écoutez l'enregistrement audio et complétez les phrases",
                cons2a:"Choisissez le bon article",
                cons3a:"Faites glisser les mots dans les espace vides pour les associer à chaque image",
                cons4a:"Répondez aux questions théoriques en sélectionnant « vrai » ou « faux »",
                cons5a: "Faites glisser la forme correcte du verbe dans les espaces vides pour compléter correctement chaque phrase",
                quest1: "1. En français, tous les noms ont un genre : masculin ou féminin.",
                quest2: "2. En français, l'adjectif est toujours placé avant le nom qu'il décrit.",
                quest3: "3. Le participe passé en français s'accorde en genre et en nombre avec le sujet lorsqu'il est utilisé avec le verbe « être ».",
                quest4: '4. Le pronom « ils » peut désigner un groupe de personnes mixtes en français.',
                quest5: '5. La structure négative française « ne...pas » est placée autour du verbe conjugué.',
                restart: "Redémarrer",
            }
        };
        let currentLanguage = localStorage.getItem('language') || 'en';
        let isNightMode = localStorage.getItem('nightMode') === 'true';
        if (isNightMode) {
            $('body').addClass('night-mode');
        }
        function updateNightModeButtonText() {
            const modeText = $('body').hasClass('night-mode') ? 'daymode' : 'nightmode';
            $('#nightmode').text(translations[currentLanguage][modeText]);
        }
        function switchLanguage(language) {
            currentLanguage = language;
            localStorage.setItem('language', language);

            $('#title_page').text(translations[language].title);
            $('.about').text(translations[language].about);
            $('#nightmode').text(translations[language].nightmode);
            $('#back2main').text(translations[language].backToMain);
            $('.back').text(translations[language].previousExercise);
            $('.forth').text(translations[language].nextExercise);
            $('#check1').text(translations[language].checkAnswers);
            $('#check2').text(translations[language].checkAnswers);
            $('#check3').text(translations[language].checkAnswers);
            $('#check4').text(translations[language].checkAnswers);
            $('#check5').text(translations[language].checkAnswers);
            $('.popup-message').text(translations[language].popupMessage);
            $('#titre_ex').text(translations[language].exercises);
            $('#titre_prog').text(translations[language].progressionTitle);
            $('.progress-section-decor #done').text(translations[language].doneTasks);
            $('.progress-section-decor #undone').text(translations[language].remainingTasks);
            $('#compr_or').text(translations[language].comprOrale);
            $('#art').text(translations[language].articles);
            $('#voc').text(translations[language].vocabulary);
            $('#theorie').text(translations[language].theory);
            $('#concord').text(translations[language].concordance);
            $('.opt_true').text(translations[language].optTrue);
            $('.opt_false').text(translations[language].optFalse);
            $('.opt_null').text(translations[language].optNull);
            $('#cons1').text(translations[language].cons1);
            $('#cons2').text(translations[language].cons2);
            $('#cons3').text(translations[language].cons3);
            $('#cons4').text(translations[language].cons4);
            $('#cons5').text(translations[language].cons5);
            $('#cons1a').text(translations[language].cons1a);
            $('#cons2a').text(translations[language].cons2a);
            $('#cons3a').text(translations[language].cons3a);
            $('#cons4a').text(translations[language].cons4a);
            $('#cons5a').text(translations[language].cons5a);
            $('#quest1').text(translations[language].quest1);
            $('#quest2').text(translations[language].quest2);
            $('#quest3').text(translations[language].quest3);
            $('#quest4').text(translations[language].quest4);
            $('#quest5').text(translations[language].quest5);
            $('#titre_restart').text(translations[language].restart);
            updateNightModeButtonText();
        }

        switchLanguage(currentLanguage);
        $('#nightmode').on('click', function() {
            $('body').toggleClass('night-mode');
            isNightMode = $('body').hasClass('night-mode');
            localStorage.setItem('nightMode', isNightMode);
            updateNightModeButtonText();
        });

        $('#translation_en').click(() => switchLanguage('en'));
        $('#translation_fr').click(() => switchLanguage('fr'));

// Cette fonction calcule et affiche le résultat total.
        function updateTotalScore() {
            let scoreTotal = (
                parseInt(localStorage.getItem("score1") || "0") +
                parseInt(localStorage.getItem("score2") || "0") +
                parseInt(localStorage.getItem("score3") || "0") +
                parseInt(localStorage.getItem("score4") || "0") +
                parseInt(localStorage.getItem("score5") || "0")
            );
            localStorage.setItem("score_total", scoreTotal);
            $("#total").html(scoreTotal);
        }
            updateTotalScore();

            

/*Cette petite fonction va créer une message qui apparaisse si on place le curseur sur le texte "About" en haut de page.
C'est un petit gimmick qui donne les informations sur le but de ce site, ainsi que sur sont auteur.*/
        const popupMessage = $('<div class="popup-message"></div>');
        $('body').append(popupMessage);
        $('.about').hover(
            function() { popupMessage.fadeIn(200); },
            function() { popupMessage.fadeOut(200); }
        );
        popupMessage.text(translations[currentLanguage].popupMessage);
/*C'est un exercice 1 qui consiste en écouter l'enregistrement et écrire les bonnes reponses.
Comme les autres exercices suivants, cet exercice garde les réponses et les affiche quand l'utilisateur clique sut le bouton pour voir les résultats.
Le résultat sera également affiché sur la page principale du projet.
Les réponses correctes deviennent vertes quand les réponses incorrectes deviennent rouges.*/
$('#check1').on('click', function() {
    let score1 = 0;
    const totalQuestions = $('.input').length;

    $('.input').each(function() {
        const userAnswer = $(this).val().trim().toLowerCase();
        const correctAnswer = $(this).data('answer').toLowerCase();

        if (userAnswer === correctAnswer && !$(this).data('correct')) {
            $(this).removeClass('incorrect').addClass('correct');
            $(this).data('correct', true);
            score1++;
        } else if (userAnswer !== correctAnswer) {
            $(this).removeClass('correct').addClass('incorrect');
        }
    });

    localStorage.setItem("score1", score1);

    if (currentLanguage === "en") {
        $('#result1').html(`<span style="font-weight: bold;">Your result is: </span>${score1} / ${totalQuestions}`);
    } else if (currentLanguage === "fr") {
        $('#result1').html(`<span style="font-weight: bold;">Votre résultat : </span>${score1} / ${totalQuestions}`);
    }

    updateTotalScore();
});
/*Cet exercice compare les réponses écrites (adaptés au lowerCase) et s'adapte au numéro des questions possibles.
Le résultat s'affiche en français ou en anglais en depandant du langage choisi.
Le résultat est ajouté au totalScore*/


// Exercise 2: Une exercice de type radio.
$('#check2').on('click', function() {
    let score2 = 0;
    const answers = { q1: 'b', q2: 'b', q3: 'c', q4: 'a', q5: 'a' };

    $('label span').css('color', '');

    for (let question in answers) {
        const correctAnswer = answers[question];
        const selectedAnswer = $(`input[name="${question}"]:checked`).val();

        $(`input[name="${question}"][value="${correctAnswer}"]`).next('span').css('color', 'green');

        if (selectedAnswer === correctAnswer) {
            score2++;
        } else if (selectedAnswer) {
            $(`input[name="${question}"][value="${selectedAnswer}"]`).next('span').css('color', 'red');
        }
    }

    localStorage.setItem("score2", score2);

    if (currentLanguage === "en") {
        $('#result2').html(`<span style="font-weight: bold;">Your result is: </span>${score2} / 5`);
    } else if (currentLanguage === "fr") {
        $('#result2').html(`<span style="font-weight: bold;">Votre résultat : </span>${score2} / 5`);
    }

    updateTotalScore();
});
/*Cet exercice compare les id's des réponses correctes aux choix de l'utilisateur.
Le résultat s'affiche en français ou en anglais en depandant du langage choisi.
Le résultat est ajouté au totalScore*/

// Exercise 3 type glisser-déposer.
// D'abbord on attribue les réponses attendues aux images.
const correctAnswers3 = {
    "img1": "img_answ1",
    "img2": "img_answ2",
    "img3": "img_answ3",
    "img4": "img_answ4",
    "img5": "img_answ5"
};
let userAnswers3 = {};
//Après, on initialise la fonction de type glisser-deposer.
$(".img_answ").on("dragstart", function(event) {
    if (!$(this).data("dropped")) {
        event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
    }
});

$(".img_drop").on("dragover", function(event) {
    event.preventDefault();
});
/*Quand l'utilisateur place la réponse sur la zone, le texte est attribuée a la zone et
les dimensions de la zone s'adaptent au taille de la réponse.*/
$(".img_drop").on("drop", function(event) {
    event.preventDefault();
    const dropId = $(this).attr("id");
    const draggedId = event.originalEvent.dataTransfer.getData("text/plain");
    const draggedElement = $("#" + draggedId);

    if (!userAnswers3[dropId]) {
        userAnswers3[dropId] = draggedId;
        localStorage.setItem(`answer_${dropId}`, draggedId);

        $(this).append(draggedElement);
        draggedElement.data("dropped", dropId);
    }
});

$("#check3").on("click", function() {
    let score3 = 0;

    $(".img_drop").each(function() {
        const dropId = $(this).attr("id");
        const answerId = userAnswers3[dropId];

        if (answerId && correctAnswers3[dropId] === answerId) {
            $(`#${answerId}`).css("background-color", "green");
            score3++;
        } else if (answerId) {
            $(`#${answerId}`).css("background-color", "red");
        }
    });

    localStorage.setItem("score3", score3);

    if (currentLanguage === "en") {
        $('#result3').html(`<span style="font-weight: bold;">Your result is: </span>${score3} / 5`);
    } else if (currentLanguage === "fr") {
        $('#result3').html(`<span style="font-weight: bold;">Votre résultat : </span>${score3} / 5`);
    }

    updateTotalScore();
});
/*Cet exercice compare les réponses correctes attribuées aux images au choix de l'utilisateur.
Le résultat s'affiche en français ou en anglais en depandant du langage choisi.
Le résultat est ajouté au totalScore*/

// Exercise 4: selection vrai-faux
$('#check4').on('click', function() {
    let score4 = 0;
    const answers4 = ['true', 'false', 'true', 'true', 'true'];

    $('.question').each(function(index) {
        const selectedAnswer = $(this).find('select').val();
        const selectElement = $(this).find('select');

        selectElement.css('color', '');

        if (selectedAnswer === answers4[index]) {
            score4++;
            selectElement.css('color', 'green');
        } else if (selectedAnswer) {
            selectElement.css('color', 'red');
        }
    });

    localStorage.setItem("score4", score4);

    if (currentLanguage === "en") {
        $('#result4').html(`<span style="font-weight: bold;">Your result is: </span>${score4} / 5`);
    } else if (currentLanguage === "fr") {
        $('#result4').html(`<span style="font-weight: bold;">Votre résultat : </span>${score4} / 5`);
    }

    updateTotalScore();
});
/*Cet exercice compare les réponses attendues au choix drop-down.
Le résultat s'affiche en français ou en anglais en depandant du langage choisi.
Le résultat est ajouté au totalScore*/

/*exercice 5 sélection d'une réponse correcte
On doit cliquer sur la réponse correcte. Si on fait son choix, on peut plus cliquer sur l'atre variant.
Le tabeau ci-dessous garde les choix corrects attendus.*/
const correctAnswers5 = {
    "verb1": "irez",
    "verb4": "mâcherons",
    "verb5": "aurions parlé",
    "verb7": "faudra",
    "verb9": "parvienne"
};

let score5 = 0;
//Cette fonction attribue un point pour la vrai réponse et change le "background color" pour indiquer le résultat.
$(".rep_5").on("click", function() {
    const answerId = $(this).attr("id");
    const answerText = $(this).text();

    if (correctAnswers5[answerId] === answerText) {
        $(this).css("background-color", "green"); 
        score5++; 
    } else {
        $(this).css("background-color", "red"); 
    }
    disablePair(answerId);
});
// Sette fonction coupe la fonctionnalité "clique" si le choix sur la ligne a été déjà fait.
function disablePair(selectedId) {
    const disabledPairs = {
        "verb1": "verb2",
        "verb3": "verb4",
        "verb5": "verb6",
        "verb7": "verb8",
        "verb9": "verb10"
    };

    const pairToDisable = disabledPairs[selectedId];
    if (pairToDisable) {
        $("#" + pairToDisable).css("pointer-events", "none");
    }
}

$("#check5").on("click", function() {
    localStorage.setItem("score5", score5);

    if (currentLanguage === "en") {
        $('#result5').html(`<span style="font-weight: bold;">Your result is: </span>${score5} / 5`);
    } else if (currentLanguage === "fr") {
        $('#result5').html(`<span style="font-weight: bold;">Votre résultat : </span>${score5} / 5`);
    }

    updateTotalScore();
});
/*Cet exercice compare les choix attendus au tableau des réponses correctes.
Le résultat s'affiche en français ou en anglais en depandant du langage choisi.
Le résultat est ajouté au totalScore*/




// La partie qui gère la progression
/*Cette fonction est responsable pour le suivi de taches restantes.
Elle garde les informations sur les exercises cliqués et décrément le compteur qui pour chaque clique.
Si le bouton particulier a été deja activé, le compteur ne sera pas décrémenté.
! Note: Malheureusement j'ai pas reussi de la synchroniser avec les actions sur les pages d'exercises corresponants.*/
    $(document).ready(function () {
        let clickedButtons = localStorage.getItem('clickedButtons') || "";
        let remainingTasks = parseInt(localStorage.getItem('remainingTasks'));
        if (remainingTasks === null || isNaN(remainingTasks)) {
            remainingTasks = 5;
        }
        $("#clicked_tache").text(remainingTasks);
        $(".exercs").on("click", function () {
            let buttonId = $(this).attr("id");
            if (!clickedButtons.includes(buttonId)) {
                clickedButtons += buttonId + ";";
                if (remainingTasks > 0) {
                    remainingTasks--;
                }
                localStorage.setItem('clickedButtons', clickedButtons);
                localStorage.setItem('remainingTasks', remainingTasks);
                $("#clicked_tache").text(remainingTasks);
            }
        });
/* Malheureusement la localisation de cette phrase se met au jour uniquement
après une clique sur un exercice car c'est le moment ou mon script vérifie currentLanguage.
Cela marche de meme façon avec l'affichage des résultats sur les pages des exercises. */
    $(document).ready(function(){
        if (currentLanguage === "en") {
            $('#titre_prog_ex').html(`Remaining exercises: <span id="clicked_tache">${remainingTasks}</span>`);
        } else if (currentLanguage === "fr") {
            $('#titre_prog_ex').html(`Tâches restantes : <span id="clicked_tache">${remainingTasks}</span>`);
        }
    });


// Réinitilisation
/* Cette fonction supprime tout ce que localStorage contient et permet de compléter les exercices encore une fois */
    $(document).on('click', '#Erase', function() {
        localStorage.clear();
        location.reload();
    });
    });
});