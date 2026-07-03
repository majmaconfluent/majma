(function(){
  var GLOSS = {
  "Principe anthropique":"Constat que l’univers paraît ajusté pour permettre la vie. Version faible : nous ne pouvons observer qu’un monde compatible avec notre existence.",
  "Rhétorique sémitique":"L’art de composer par symétries, propre à la Bible et au Coran ; et l’analyse de cette composition (Meynet, Cuypers).",
  "Désenchantement":"Le retrait du sacré et du mystère du monde sous l’effet de la rationalisation moderne (Max Weber).",
  "Individuation":"Chez Jung, le travail d’une vie : devenir soi en intégrant l’inconscient, l’ombre d’abord, pour passer du petit moi (l’ego) au Soi, centre plus vaste de la psyché.",
  "Voie négative":"Parler de Dieu en disant non ce qu’il est, mais ce qu’il n’est pas, pour ne pas le réduire à nos idées. Proche du tanzīh, l’absolue transcendance ; Maïmonide en fit une méthode.",
  "Umm al-Kitāb":"La « Mère du Livre » : pour Shahrour, la part législative et morale, le message adressé à la conduite.",
  "qalb salīm":"Le cœur : dans le Coran, non le siège de la seule émotion, mais l’organe de la compréhension, de la foi et de la décision. Il peut être sain (salīm), malade, durci ou scellé. C’est là que le savoir devient conviction.",
  "Théodicée":"La « justice de Dieu » : tout effort pour concilier l’existence du mal avec un Créateur bon et tout-puissant.",
  "al-Kitāb":"Le Livre : pour Shahrour, la totalité du révélé, dont le Coran n'est qu'une part.",
  "Ibtilāʾ":"L’épreuve : la vie comprise comme test, motif central de la lecture coranique du mal et de la souffrance.",
  "Anattā":"Le « non-soi » du bouddhisme : aucun moi permanent ne se cache derrière l’expérience ; le « je » est un flux, et s’y agripper fait souffrir. Non pas « tu n’existes pas », mais « rien de fixe ne te sous-tend ».",
  "Burhān":"La démonstration : la preuve rationnelle rigoureuse, celle du philosophe et du savant.",
  "Furqān":"Le Critère : le noyau moral commun à tous les messagers, ce qui distingue le bien du mal.",
  "Iṣṭafā":"Élire, choisir le meilleur parmi plusieurs. Que Dieu ait « élu » Adam (3:33) suppose un ensemble : on ne choisit pas l’unique, ce qui nourrit la lecture d’un humain distingué d’entre d’autres vivants.",
  "Karāma":"La dignité conférée à l'humain : « Nous avons honoré les fils d'Adam » (17, 70). Intrinsèque, non méritée, non conditionnelle.",
  "Taʾwīl":"L'interprétation : le retour au sens profond quand la lettre heurte ce que la raison démontre.",
  "Taklīf":"L’obligation, donc la responsabilité morale. Elle suppose la raison (ʿaql) et la capacité (qudra) : nul n’est tenu au-delà de ce qu’il peut (Coran 2, 286).",
  "Tawḥīd":"L'unicité : l'idée que tout le réel tient sous un seul principe, une seule source.",
  "Dhikr":"Le Rappel : pour Shahrour, la mise en forme arabe et récitable du Coran, sa face audible.",
  "Fiṭra":"La disposition originelle : la nature première inscrite en l'humain avant toute culture, racine du sens moral.",
  "Ashʿarisme":"École de théologie sunnite fondée au Xe siècle par al-Ashʿarī, qui place la raison au service d'une lecture juste du texte révélé. Théologie dominante du monde sunnite pendant environ neuf siècles.",
  "Athari":"Approche théologique qui part directement du texte révélé et de la fiṭra, affirmant le sens apparent des versets sur les attributs divins sans l'interpréter (bilā kayf). Référence d'Ibn Taymiyya puis du wahhabisme.",
  "Tanzīh":"L'absolue transcendance de Dieu : le principe selon lequel rien dans le créé ne Lui ressemble (Coran 42:11). Fondement déclaré de la méthode ashʿarite comme de la méthode athari.",

  "Kalam":"La théologie spéculative islamique, qui argumente rationnellement sur les questions de foi. L'ashʿarisme et le māturīdisme forment le « kalam sunnite classique ».",
  "Māturīdisme":"École de théologie sunnite très proche de l'ashʿarisme, fondée au Xe siècle par al-Māturīdī à Samarcande. Domine le monde turcophone et l'Asie centrale.",
  "Mawlid":"Célébration de la naissance du Prophète, pratique répandue dans les traditions ashʿarite et soufie mais contestée comme innovation par les courants athari et salafi.",
  "Salafisme":"Mouvement qui prône un retour à la pratique des « pieux ancêtres » (al-salaf al-ṣāliḥ), les premières générations musulmanes, perçue comme la forme la plus pure de l'islam. Très lié à l'atharisme sur le plan théologique, il s'en distingue par son ambition de réforme sociale et religieuse plus large.",
  "Soufi":"Relatif au soufisme, courant mystique de l'islam centré sur la purification intérieure et la proximité avec Dieu. Historiquement très lié à l'ashʿarisme et au māturīdisme dans le monde sunnite, il est l'une des cibles principales de la critique athari et salafi.",
  "Hanbalites":"Partisans du hanbalisme, l'une des quatre grandes écoles juridiques (madhhab) du sunnisme, fondée sur l'enseignement d'Ahmad ibn Hanbal (m. 855). La plus attachée historiquement à une lecture directement textuelle ; c'est d'elle qu'est issu le courant athari, puis Ibn Taymiyya et le wahhabisme.",
  "Wahhabite":"Relatif au wahhabisme, courant religieux né du pacte de 1744 entre Muḥammad ibn ʿAbd al-Wahhāb et Muḥammad ibn Saʿūd dans le Najd. Doctrine officielle de l'État saoudien, ses partisans préfèrent généralement les termes « salafi » ou « athari ».",
  "Mālikite":"Relatif au mālikisme, l'une des quatre grandes écoles juridiques (madhhab) du sunnisme, fondée sur l'enseignement de Mālik ibn Anas (m. 795). Dominante en Afrique du Nord et de l'Ouest, historiquement associée à la théologie ashʿarite.",
  "Muʿtazilites":"Partisans du muʿtazilisme, courant rationaliste de la théologie islamique classique (VIIIe-Xe siècle), qui fait de la raison le juge ultime, y compris sur la nature de Dieu. Al-Ashʿarī en fut d'abord un disciple avant de fonder, en réaction, l'ashʿarisme.",

  "Ḥudūd":"Les limites. Chez Shahrour, les bornes (un plancher, un plafond) entre lesquelles la raison humaine reste libre de légiférer.",
  "Iʿjāz":"L’« inimitabilité » du Coran. Au sens moderne et contesté, l’apologétique des « miracles scientifiques » qui prétend y trouver la science d’aujourd’hui.",
  "Iblīs":"Celui qui refuse de se prosterner par orgueil (« je suis meilleur », 7:12) et « dévie de l’ordre » (amr) de son Seigneur (18:50). Lu symboliquement : le principe du refus de l’ordre, non une puissance rivale de Dieu.",
  "Iqraʾ":"« Lis » : le premier mot révélé (96:1). Il place la connaissance à la source même de la révélation, avant tout article de foi.",
  "Qalam":"La plume. De la racine q-l-m, couper, tailler (cf. taqlīm). Dans la lecture de Shahrour, le calame renvoie à la faculté de distinguer, de séparer entre les choses, mécanisme de tout savoir.",
  "Qadar":"La mesure : la racine évoque ce qui est proportionné. Lu comme l’ordre et les lois donnés à la création, non comme un scénario écrit d’avance.",
  "Qaḍāʾ":"L’accomplissement : l’acte d’agir à l’intérieur de l’ordre (qadar). De la même racine, le qāḍī, le juge, qui yaqḍī : il tranche selon des lois établies, sans les inventer.",
  "Bāṭin":"Le caché et l’apparent : les deux régimes d’un texte, sa lettre immédiate et son sens profond.",
  "Ẓāhir":"Le caché et l’apparent : les deux régimes d’un texte, sa lettre immédiate et son sens profond.",
  "Ombre":"Chez Jung : le Soi est le centre total de la psyché ; l'ombre, la part de nous que nous refusons de voir.",
  "Hawā":"Le penchant, le caprice, le désir qui tire vers le bas. Le Coran avertit contre celui qui « prend son hawā pour dieu » (45:23) : c’est lui qui aveugle et finit par sceller le cœur.",
  "Ummī":"Traditionnellement « illettré », d’où l’idée d’un miracle. Mais dans le Coran les ummiyyūn s’opposent aux gens du Livre, juifs et chrétiens (3:20 ; 62:2) ; Shahrour y lit « qui n’appartient pas à la communauté du Livre », un gentil, proche de l’hébreu goy.",
  "Kasb":"L’« acquisition » : le compromis d’al-Ashʿarī où Dieu crée l’acte et l’homme se l’approprie.",
  "Nafs":"Le souffle, l'âme-soi. Le Coran en décrit trois stations : instigatrice (ammāra), qui se blâme (lawwāma), apaisée (muṭmaʾinna).",
  "Kufr":"Couvrir, recouvrir, d’où l’ingratitude. Pour Izutsu, l’incroyance est d’abord une ingratitude du cœur, le contraire de la gratitude (shukr), non une erreur de raisonnement.",
  "Qalb":"Le cœur : dans le Coran, non le siège de la seule émotion, mais l’organe de la compréhension, de la foi et de la décision. Il peut être sain (salīm), malade, durci ou scellé. C’est là que le savoir devient conviction.",
  "Āya":"Le signe. Le même mot désigne un verset du Coran et toute chose du monde : la nature se lit comme un texte.",
  "Rūḥ":"L’esprit. Dans la lecture symbolique (Shahrour), non une substance mais l’ordre divin (al-amr) et le saut vers la pensée abstraite : « l’esprit relève de l’amr de mon Seigneur » (17:85).",
  "Soi":"Chez Jung : le Soi est le centre total de la psyché ; l'ombre, la part de nous que nous refusons de voir.",
  "Apatheia":"Chez les stoïciens, l'absence de passions-troubles : non l'insensibilité, mais la liberté à l'égard de ce qui nous agite sans raison.",
  "Sublimation":"Chez Freud, le déplacement de l'énergie pulsionnelle vers un but non sexuel et socialement valorisé : art, pensée, action.",
  "Archétype":"Chez Jung, un motif universel qui structure l'inconscient collectif : le héros, l'ombre, le vieux sage, la mère, et d'autres figures que l'on retrouve dans tous les mythes et tous les rêves.",
  "Inconscient collectif":"Chez Jung, la couche de l'inconscient commune à toute l'humanité, faite d'archétypes : des dispositions héritées, non du contenu, qui structurent les images et récits de toutes les cultures.",
  "Taṇhā":"Dans le bouddhisme, la soif, l'attachement qui s'accroche à ce qui change : la racine de la souffrance (dukkha) selon le deuxième des Quatre Nobles Vérités.",
  "Nirvāṇa":"Dans le bouddhisme, l'extinction de la soif (taṇhā) et donc de la souffrance qu'elle engendre : non un lieu, mais la fin d'un mécanisme.",
  "Verdrängung":"Le refoulement chez Freud : le mécanisme par lequel un contenu psychique inacceptable est repoussé hors de la conscience, sans disparaître.",
  "Contenu manifeste":"Chez Freud, le rêve tel qu'on le vit et le raconte, par opposition au contenu latent, son sens caché que le travail d'interprétation cherche à dégager.",
  "Contenu latent":"Chez Freud, le sens caché d'un rêve, derrière son contenu manifeste : ce que le travail d'interprétation cherche à dégager.",
  "Yetser ha-ra":"Dans la pensée juive, le penchant mauvais : une inclination intérieure à dominer plutôt qu'une force extérieure, proche en cela du hawā coranique.",
  "ʿIlm ladunî":"Le savoir « venu d'auprès de Dieu » : reçu directement, non par apprentissage ni raisonnement, comme celui de Khidr dans le récit coranique.",
  "Walāya":"La proximité sanctifiante avec Dieu, la sainteté dans la tradition soufie. Le walī (saint, « ami de Dieu ») en est le porteur ; Khidr en est une figure majeure.",
  "Fanāʾ":"Dans le soufisme, l'extinction du moi (nafs) dans l'union avec le divin : la dissolution de l'ego comme aboutissement du chemin spirituel.",
  "Psychē":"En grec, l'âme : principe vital et pensant, racine de « psychologie » et de « psychanalyse ».",
  "Persona":"Chez Jung, le masque social que chacun présente aux autres : non un mensonge, mais une façade nécessaire, derrière laquelle se trouvent l'ombre et le reste de la psyché.",
  "Sentiment d’infériorité":"Chez Alfred Adler, le sentiment, commun à tout enfant face aux adultes, d'être petit et dépendant ; un point de départ, pas un défaut, autour duquel s'organise une grande partie de la vie psychique.",  "Tazkiyat al-nafs":"La purification de l'âme dans la tradition islamique : un travail intérieur de discipline et d'affinement qui vise à conduire le nafs ammāra vers la paix du nafs muṭmaʾinna. Proche de l'individuation jungienne dans son mouvement, différent dans son opération : l'islam purifie là où Jung intègre.",
  "Al-dunyā":"En arabe, 'ce qui est proche' : désigne cette vie terrestre, par opposition à al-ākhira. Non pas une condamnation du monde, mais un rappel de sa place relative.",
  "Al-ākhira":"En arabe, 'ce qui vient après' : la vie future dans la cosmologie islamique. Terme souvent traduit par 'au-delà' ou 'vie éternelle'.",
  "Ijtihād":"En droit islamique, l'effort de raisonnement personnel pour déduire une règle d'une situation nouvelle à partir des sources. Opposé au taqlīd, l'imitation sans examen.",
  "Taqlīd":"Dans la tradition islamique, le fait de suivre l'opinion d'un savant ou d'une école sans en examiner les fondements. Contraire de l'ijtihād.",
  "Taqwā":"Souvent traduit par 'crainte de Dieu' ou 'piété', mais mieux rendu par 'conscience de Dieu' : un état d'attention intérieure qui guide les actes, moins une peur qu'une présence.",
  "Āyāt":"Pluriel de āya : à la fois 'verset coranique' et 'signe'. Le Coran utilise le même mot pour désigner les versets du texte et les signes dans la création.",
  "Taqdīr":"Le décret divin dans la pensée islamique : l'idée que Dieu connaît et a 'mesuré' toute chose. Au cœur du débat sur le libre arbitre.",
  "ʿAql":"La raison, l'intellect, en arabe. Dans le Coran, le verbe ʿaqala (d'où vient ʿaql) signifie 'attacher, retenir' : la raison comme ce qui retient et maîtrise.",
  "Nahḍa":"La renaissance culturelle et intellectuelle du monde arabe au XIXe et début XXe siècle : mouvement de réforme qui cherchait à concilier modernité et tradition islamique.",
  "Ruʾyā":"Le rêve prophétique ou véridique dans la tradition islamique : une des 46 parties de la prophétie selon un hadith. Distingué du ḥulm.",
  "Ḥulm":"Le rêve ordinaire dans la tradition islamique, par opposition à la ruʾyā. Peut venir du soi ou, selon la tradition, d'influences perturbatrices.",
  "Ghaḍḍ al-baṣar":"Littéralement 'baisser le regard' (Coran 24:30-31). Non pas fermer les yeux, mais abaisser une partie du regard : une posture générale de mesure et de maîtrise de ce qui entre en soi.",
  "Mīzān":"La balance, la mesure, l'équilibre : l'un des concepts centraux du Coran, qui l'associe à la justice cosmique et à la juste mesure dans les actes humains.",
  "Sharīʿa":"Littéralement 'le chemin vers la source d'eau' : la loi islamique dans son ensemble, couvrant le rituel, l'éthique, le droit. Souvent réduit à la dimension pénale dans le discours public, alors qu'elle est beaucoup plus large.",
  "Bilā kayf":"'Sans demander comment' : position théologique de certains savants musulmans face aux attributs divins anthropomorphes (Dieu 's'installe sur le Trône') : on accepte le texte sans chercher à savoir comment cela se passe.",
  "Burhān":"La preuve démonstrative, le raisonnement rigoureux. Chez Averroès, le plus haut degré de certitude, réservé aux philosophes. Opposé au khaṭāb (le discours persuasif) et au jadal (le débat dialectique).",

  "Compensation":"Chez Alfred Adler, la façon dont chacun répond à son sentiment d'infériorité : apprendre, contribuer, se rendre utile, trouver sa place dans un groupe.",
  "Énantiodromie":"Chez Jung, la loi selon laquelle ce qu'on refoule ou ignore ne disparaît pas, mais s'accumule et revient par-derrière en sens contraire, souvent avec d'autant plus de force qu'on l'a longtemps ignoré.",
    "Mundus Imaginalis":"Terme latin créé par Henry Corbin pour désigner le monde imaginal, 'Alam al-Mithāl en arabe : un espace intermédiaire entre le monde sensible et le monde purement divin, où les symboles, les archétypes et les figures des visions ont une réalité propre. Distinct de l’imaginaire : non pas ce qui n’existe pas, mais ce qui existe selon un autre mode d’être.",
  "Barzakh":"En arabe, l’isthme, la zone entre deux mers. Dans le Coran (55:19-20), il sépare deux mers sans les laisser se mélanger. Dans la cosmologie islamique et soufie, il désigne le monde intermédiaire entre le visible (shahāda) et l’invisible (ghayb), l’espace où le Monde Imaginal prend forme.",
  "Ketmān":"Concept islamique traduit par Henry Corbin par ‘discipline de l’arcane’ : la discrétion sur ce qui ne peut se transmettre que par l’expérience directe, non par le discours. Jung et Corbin l’ont pratiquée sur leur convergence.",
  "ʿAlam al-Mithāl":"Le monde des images archétypales dans la cosmologie islamique classique, traduit par Henry Corbin comme Mundus Imaginalis. L’espace intermédiaire où les esprits se corporalisent et les corps se spiritualisent.",
  "Shahāda":"Le visible, le monde sensible dans la cosmologie islamique. Aussi : l’attestation de foi (il n’y a de dieu que Dieu). Le contexte distingue les deux sens.",
  "Ghayb":"L’invisible, ce qui est caché au sens percevant dans la cosmologie islamique. S’oppose à shahāda. Le Coran s’ouvre sur les croyants qui ‘croient au ghayb’.",
  "Murāqaba":"Dans la tradition islamique, la vigilance intérieure : conscience d'être sous le regard de Dieu, et par extension, qualité de présence attentive au moment et à l'autre.",
  "Ḥuqūq al-ʿibād":"Les droits que les personnes ont sur nous dans la tradition islamique : une catégorie de devoirs envers autrui aussi importante que les devoirs envers Dieu.",
  "Je-Tu":"Chez Martin Buber, le mode de relation où l'autre est rencontré comme un sujet entier, une présence irréductible à son rôle ou à son utilité. Son contraire, le Je-Cela, est la relation où l'autre devient objet ou moyen.",
  "Je-Cela":"Chez Martin Buber, le mode de relation où l'autre est traité comme un objet, un rôle ou un moyen, par opposition au Je-Tu, la rencontre vraie. Le monde Je-Cela est nécessaire, mais problématique quand il envahit ce qui devrait être rencontre.",
  "Dhikr al-mawt":"Le rappel de la mort dans la tradition islamique : non un exercice morbide, mais une pratique de lucidité pour remettre les priorités à leur juste place.",
  "Maraṇasati":"En pali, la pleine conscience de la mort : l'une des méditations bouddhistes les plus directes, qui consiste à visualiser sans détournement du regard le fait que ce corps mourra. Non pour se déprimer, mais pour couper l'illusion d'un temps illimité.",
  "Meditatio mortis":"Dans la philosophie stoïcienne, la méditation sur la mort comme exercice de retour à l'essentiel. Sénèque y voit non un sujet d'angoisse, mais un test de ce qui vaut vraiment la peine.",
  "Iḥsān":"En arabe, la beauté, l'excellence et la bonté réunies en un seul mot. Dans un récit classique de la tradition islamique, l'ange Gabriel demande au Prophète ﷺ de définir l'excellence spirituelle. Réponse : 'Adore Dieu comme si tu Le voyais ; et si tu ne Le vois pas, sache qu'Il te voit.' Une définition non pas de la beauté, mais d'une qualité de présence : agir sous un regard complet, même quand on ne le perçoit pas.",
  "Être-pour-la-mort":"Chez Heidegger, la reconnaissance que la mort est l'horizon certain et personnel de toute existence. Non un pessimisme, mais une invitation à vivre de façon authentique, comme si la vie t'appartenait vraiment.",
  "Désir mimétique":"Chez René Girard, le mécanisme par lequel on désire non pas spontanément un objet, mais ce qu'un autre désire : le désir naît de l'imitation d'un modèle, pas d'un besoin propre.",
  "Logothérapie":"Thérapie fondée par Viktor Frankl : soin par le sens. Sa thèse : la première motivation de l'être humain est la quête de sens, non le plaisir (Freud) ni la puissance (Adler).",
  "Tafwīd":"La 'remise' ou 'délégation' : posture théologique classique qui affirme le sens des attributs divins sans en préciser la modalité. On dit que Dieu 'a une Main' sans demander 'comment'. Ce n'est pas de l'ignorance : c'est la reconnaissance que le sens ne dépend pas de la modalité pour être réel. Formulé classiquement : bilā kayf, sans demander comment.",
  "Phénoménologie":"Méthode philosophique fondée par Edmund Husserl (1859-1938), qui consiste à décrire rigoureusement les phénomènes tels qu'ils se donnent à la conscience, avant toute théorie causale. Le principe : retourner aux choses elles-mêmes.",
  "Ijmāʿ":"Le consensus des savants musulmans. Troisième source du droit islamique après le Coran et la Sunnah. Quand les juristes s'accordent sur une règle, ce consensus a valeur juridique et comble les cas que les textes n'ont pas explicitement prévus.",
  "Rijāl":"Littéralement 'les hommes' : science islamique classique d'étude des transmetteurs de hadith. Chaque narrateur est évalué sur sa fiabilité, sa mémoire, ses maîtres et ses élèves.",
  "Muḥkamāt":"Les versets 'univoques' du Coran, clairs dans leur sens, qui forment l'Umm al-Kitāb, la mère du Livre (3:7). Opposés aux mutashābihāt.",
  "Mutashābihāt":"Les versets 'équivoques' du Coran dont le sens résiste à une lecture définitive (3:7). Seul Dieu en connaît la vraie interprétation. La bonne posture face à eux est l'humilité : nous y croyons, tout vient de notre Seigneur.",
  "Tafsīr":"L'exégèse coranique : le commentaire et l'interprétation du texte coranique. Discipline immense de la pensée islamique sur quatorze siècles. Diffère du taʾwīl, qui désigne une interprétation plus profonde.",
  "Nāsikh":"L'abrogeant : verset ou hadith qui annule une règle antérieure. Avec le mansūkh (l'abrogé), il permet de réconcilier des textes apparemment contradictoires en les situant chronologiquement.",
  "Mansūkh":"L'abrogé : règle annulée par un texte postérieur (nāsikh). L'étendue de l'abrogation et ses critères sont parmi les questions les plus débattues de la méthodologie islamique.",
  "Al-ʿAwl":"Littéralement 'l'augmentation' : mécanisme juridique qui réduit proportionnellement les parts d'héritage quand leur somme dépasse l'unité. Les Compagnons ont divergé : Omar l'acceptait, Ibn Abbas proposait une autre répartition.",
  "Raziyyat al-Khamīs":"La 'Calamité du Jeudi' : épisode rapporté dans Sahih Bukhari (4168-4169) et Sahih Muslim (1637). Le Prophète agonisant demanda de quoi écrire un testament. Omar dit : 'le Livre de Dieu nous suffit.' Ibn Abbas dira : 'La plus grande calamité fut que cette dispute empêcha le Prophète d'écrire.'",
  "Possession":"Chez Jung, l'état dans lequel une énergie psychique a pris le pouvoir sur le moi sans que celui-ci s'en aperçoive : il croit librement vouloir ce à quoi il est en réalité assujetti. Ce que les Anciens nommaient être possédé par un dieu.",
  "Naẓar":"L'examen raisonné : le fait de tourner et retourner une question par la raison plutôt que de recevoir une réponse toute faite. Sur ce geste, les théologiens musulmans ont bâti des siècles de débats sur Dieu, la justice et la liberté humaine.",
  "Kalām":"Littéralement 'la parole' ou 'la discussion' : la théologie rationnelle de l'islam, l'art de défendre et d'examiner la foi par l'argument, née des tout premiers débats sur le statut du croyant fautif et sur le destin.",
  "Miḥna":"'L'épreuve' : l'inquisition lancée en 833 par le calife al-Maʾmūn pour imposer la doctrine du Coran créé, qui coûta l'emprisonnement et la flagellation au théologien Ibn Ḥanbal. Renversée vers 848.",
  "Dukkha":"Dans le bouddhisme, la souffrance inhérente à l'existence, constatée dans la première des quatre nobles vérités. La question qu'elle appelle n'est pas 'pourquoi la souffrance existe-t-elle', mais 'comment s'en libérer'.",
  "Tawakkul":"L'abandon confiant en Dieu, une fois qu'on a fait sa part. Non une passivité : la tradition précise qu'on attache d'abord son chameau, puis on s'en remet à Dieu pour le reste. Un des piliers de la vie spirituelle en islam."
};

  // Termes tries du plus long au plus court (deja fait a la generation),
  // pour eviter qu'un terme court ne matche a l'interieur d'un plus long.
  var terms = Object.keys(GLOSS);

  // Echappe les caracteres speciaux regex
  function esc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}

  // Construit une regex par terme : limites de "mot" tolerantes aux diacritiques arabes
  // (on utilise des frontieres non-lettres/chiffres plutot que \b, qui ne gere pas bien les diacritiques)
  var BOUND = "(^|[^\\p{L}\\p{N}\\u02bf\\u02bb\\u0304\\u0331])";
  var BOUND_END = "(?=[^\\p{L}\\p{N}\\u02bf\\u02bb\\u0304\\u0331]|$)";

  // Termes dont la casse est significative : "Soi" (Jung) ne doit pas matcher
  // "soi" en minuscule (sens ordinaire, tres frequent en francais).
  var CASE_SENSITIVE = {"Soi": true};

  function processTextNode(node, used){
    var text = node.nodeValue;
    if(!text || !text.trim()) return;
    for(var i=0;i<terms.length;i++){
      var term=terms[i];
      if(used[term]) continue;
      var re;
      try{
        var flags = CASE_SENSITIVE[term] ? "u" : "ui";
        re=new RegExp(BOUND+"("+esc(term)+")"+BOUND_END,flags);
      }catch(e){ continue; }
      var m=re.exec(text);
      if(!m) continue;
      var idx=m.index+m[1].length;
      var before=text.slice(0,idx);
      var match=m[2];
      var after=text.slice(idx+match.length);

      var span=document.createElement("span");
      span.className="gt";
      span.tabIndex=0;
      span.setAttribute("data-def",GLOSS[term]);
      span.setAttribute("data-term",term);
      span.textContent=match;

      var frag=document.createDocumentFragment();
      if(before) frag.appendChild(document.createTextNode(before));
      frag.appendChild(span);
      if(after) frag.appendChild(document.createTextNode(after));

      node.parentNode.replaceChild(frag,node);
      used[term]=true;
      // continuer le scan sur le texte "after" pour d'autres termes
      // (on relance via le frag deja insere : le noeud texte "after" est dans le DOM)
      var afterNode=frag.lastChild===span?null:frag.lastChild;
      if(afterNode && afterNode.nodeType===3) processTextNode(afterNode, used);
      return;
    }
  }

  function walk(root, used){
    var nodes=[];
    (function collect(n){
      for(var c=n.firstChild;c;c=c.nextSibling){
        if(c.nodeType===3) nodes.push(c);
        else if(c.nodeType===1 && c.tagName!=="A" && c.tagName!=="SPAN" && c.tagName!=="SCRIPT" && c.tagName!=="STYLE") collect(c);
      }
    })(root);
    for(var i=0;i<nodes.length;i++) processTextNode(nodes[i], used);
  }

  // Glossaire anglais (utilisé par les pages /en/)
  var GLOSS_EN = {
    "Inconscient":"The part of the psyche beyond conscious awareness — not absence of thought, but a vast submerged layer of drives, memories, and autonomous figures.",
    "Soi":"In Jung, the Self (capital S) is the center and totality of the psyche — conscious and unconscious together. Not a larger ego, but a different center entirely.",
    "Moi":"The ego: the everyday conscious \"I\" that decides and plans. Useful, but prone to mistaking itself for the whole person.",
    "Individuation":"Jung's term for the lifelong process by which the ego gradually reconciles with the Self — becoming more whole rather than more perfect.",
    "Arch\u00e9type":"Universal patterns or figures that recur across cultures — the wise man, the hero, the shadow, the guide. Molds each culture fills differently.",
    "Ombre":"The shadow: everything the conscious ego refuses to acknowledge in itself — projected onto others or acted out unconsciously.",
    "Nafs":"In the Quran, the nafs is the self or soul — not a fixed entity but a site of struggle, from the \"commanding nafs\" (toward wrong) to the \"reassured nafs.\"",
    "\u1e92\u0101hir":"The apparent, literal surface of a text. Opposed to b\u0101\u1e6din.",
    "B\u0101\u1e6din":"The hidden inner meaning of a text. The dimension the ta\u02bfw\u012bl seeks to uncover.",
    "Ta\u02bfw\u012bl":"Spiritual or symbolic interpretation that leads a text back to its inner meaning. Not arbitrary — it follows rules.",
    "Fi\u1e6dra":"The primordial nature inscribed in every human at creation — an original orientation toward the good, prior to any religion.",
    "Haw\u0101":"In the Quran, the inner pull or caprice that acts before thought. The desire that, unchecked, takes the place of god.",
    "Qadar":"Divine decree or predestination in Islamic theology. Does not negate human freedom — the debate over how the two relate is central to Islamic thought.",
    "Barzakh":"The isthmus — an intermediate state neither one thing nor another. In the Quran, the barrier between two seas; by extension, the imaginal world.",
    "\u02bfIlm ladun\u00ee":"The knowledge received directly from God — not learned or reasoned. The knowledge Khidr holds in the Quranic narrative.",
    "Wal\u0101ya":"Sanctifying proximity to God in Sufi tradition — the sainthood of the wal\u012b (friend of God), whose knowledge comes directly from the divine.",
    "Monde imaginal":"Henry Corbin's term for the intermediate world between the physical and the intelligible — where archetypes are real, where visions occur.",
    "Synchronicit\u00e9":"Jung's concept of meaningful coincidence: two events linked not by cause but by shared meaning.",
    "Qalb":"The heart in the Quran — not the seat of emotion but the organ of understanding, faith, and decision.",
    "R\u016b\u1e25":"The spirit or breath — in the Quran, what God breathed into Adam. The divine spark in the human.",
    "D\u00e9senchantement":"Max Weber's term for the withdrawal of the sacred from the modern world through rationalization.",
    "Principe anthropique":"The observation that the universe appears fine-tuned to permit life.",
    "Rh\u00e9torique s\u00e9mitique":"The art of composition by symmetries and concentric structures, characteristic of the Bible and the Quran."
  };

  function init(){
    var prose=document.querySelector(".prose");
    if(!prose) return;
    var used={};
    var blocks=prose.querySelectorAll("p, li");
    for(var i=0;i<blocks.length;i++){
      // limiter aux blocs sans arabe dominant (eviter de toucher aux versets/inline arabes)
      walk(blocks[i], used);
    }


    // tooltip
    var tip=document.createElement("div");
    tip.className="gt-tip";
    document.body.appendChild(tip);
    var current=null;

    function show(el){
      current=el;
      var lang=document.documentElement.lang||"fr";
      var defEn=GLOSS_EN[el.getAttribute("data-term")];
      var defFr=el.getAttribute("data-def");
      tip.textContent=(lang==="en"&&defEn)?defEn:defFr;
      tip.classList.add("show");
      // forcer un reflow pour obtenir les dimensions a jour avant de positionner
      var r=el.getBoundingClientRect();
      var tw=tip.offsetWidth, th=tip.offsetHeight, vw=window.innerWidth;
      var left=r.left+r.width/2-tw/2;
      if(left<12) left=12;
      if(left+tw>vw-12) left=Math.max(12,vw-12-tw);
      tip.style.left=left+"px";
      var top=r.bottom+8+window.scrollY;
      if(r.bottom+th+16>window.innerHeight){
        top=r.top-th-8+window.scrollY;
        if(top<window.scrollY+8) top=window.scrollY+8;
      }
      tip.style.top=top+"px";
    }
    function hide(){tip.classList.remove("show");current=null;}

    document.querySelectorAll(".gt").forEach(function(el){
      el.addEventListener("mouseenter",function(){show(el);});
      el.addEventListener("mouseleave",hide);
      el.addEventListener("focus",function(){show(el);});
      el.addEventListener("blur",hide);
      el.addEventListener("click",function(e){
        e.stopPropagation();
        if(current===el){hide();}else{show(el);}
      });
    });
    document.addEventListener("click",function(){if(current)hide();});
    document.addEventListener("scroll",function(){if(current)hide();},{passive:true});
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init);
  else init();
})();
