const authors = [
  {
    "name": "Chinua Achebe",
    "books": [],
    "biography": "Chinua Achebe was a Nigerian novelist, poet, and critic who is regarded as a central figure of modern African literature. His first novel and magnum opus, Things Fall Apart, occupies a pivotal place in African literature and remains the most widely studied, translated, and read African novel."
  },
  {
    "name": "Kingsley Amis",
    "books": [],
    "biography": "Sir Kingsley William Amis CBE was an English novelist, poet, critic and teacher. He wrote more than 20 novels, six volumes of poetry, a memoir, short stories, radio and television scripts, and works of social and literary criticism."
  },
  {
    "name": "Mary Beard",
    "books": [],
    "biography": "Dame Winifred Mary Beard, DBE, FSA, FBA, FRSL is an English classicist specialising in Ancient Rome. She is a trustee of the British Museum and formerly held a personal professorship of classics at the University of Cambridge.."
  },
  {
    "name": "William Boyd",
    "books": [],
    "biography": " William Andrew Murray Boyd CBE FRSL is a Scottish novelist, short story writer and screenwriter."
  },
  {
    "name": "Peter Carey",
    "books": [],
    "biography": " Peter Philip Carey AO is an Australian novelist. He is one of only five writers to have won the Booker Prize twice—the others being J. G. Farrell, J. M. Coetzee, Hilary Mantel and Margaret Atwood. "
  },
  {
    "name": "Jonathan Coe",
    "books": [],
    "biography": "Jonathan Coe FRSL is an English novelist and writer. His work has an underlying preoccupation with political issues, although this serious engagement is often expressed comically in the form of satire. For example, What a Carve Up! reworks the plot of an old 1960s spoof horror film of the same name."
  },
  {
    "name": "Joseph Conrad",
    "books": [],
    "biography": " Joseph Conrad was a Polish-British novelist and story writer. He is regarded as one of the greatest writers in the English language; though he did not speak English fluently until his twenties, he came to be regarded a master prose stylist who brought a non-English sensibility into English literature."
  },
  {
    "name": "Emily Dickinson",
    "books": [],
    "biography": "Emily Elizabeth Dickinson was an American poet. Little-known during her life, she has since been regarded as one of the most important figures in American poetry. Dickinson was born in Amherst, Massachusetts, into a prominent family with strong ties to its community. "
  },
  {
    "name": "Tana French",
    "books": [],
    "biography": " Tana French is an American-Irish writer and theatrical actress. She is a longtime resident of Dublin, Ireland. Her debut novel In the Woods, a psychological mystery, won the Edgar, Anthony, Macavity, and Barry awards for best first novel. The Independent has referred to her as 'the First Lady of Irish Crime'."
  },
  {
    "name": "Mark Haddon",
    "books": [],
    "biography": " Mark Haddon is an English novelist, best known for The Curious Incident of the Dog in the Night-Time. He won the Whitbread Award, the Dolly Gray Children's Literature Award, the Guardian Prize, and a Commonwealth Writers Prize for his work. "
  },
  {
    "name": "James Frey",
    "books": [],
    "biography": "James Christopher Frey is an American writer and businessman. His first two books, A Million Little Pieces and My Friend Leonard, were bestsellers marketed as memoirs. Large parts of the stories were later found to be exaggerated or fabricated, sparking a media controversy. "
  },
  {
    "name": "R.D. Laing",
    "books": [],
    "biography": " Ronald David Laing, usually cited as R. D. Laing, was a Scottish psychiatrist who wrote extensively on mental illness—in particular, psychosis and schizophrenia."
  },
  {
    "name": "David Lodge",
    "books": [],
    "biography": " David John Lodge CBE is an English author and critic. A literature professor at the University of Birmingham until 1987, some of his novels satirise academic life, notably the 'Campus Trilogy' – Changing Places: A Tale of Two Campuses, Small World: An Academic Romance and Nice Work"
  },
  {
    "name": "Nancy Mitford",
    "books": [],
    "biography": "Nancy Freeman-Mitford CBE, known as Nancy Mitford, was an English novelist, biographer, and journalist. The eldest of the Mitford sisters, she was regarded as one of the 'bright young things' on the London social scene in the inter-war period. "
  },
  {
    "name": "Mal Peet",
    "books": [],
    "biography": " Malcolm Charles Peet was an English writer and illustrator best known for young adult fiction. He has won several honours including the Brandford Boase, the Carnegie Medal and the Guardian Prize, British children's literature awards that recognise 'year's best' books."
  },
  {
    "name": "Rachel Cusk",
    "books": [],
    "biography": "Rachel Cusk is a British novelist and writer.  "
  },
  {
    "name": "Jonathan Raban",
    "books": [],
    "biography": "Jonathan Mark Hamilton Priaulx Raban was a British award-winning travel writer, playwright, critic, and novelist. "
  },
  {
    "name": "Rose Tremain",
    "books": [],
    "biography": " Dame Rose Tremain DBE FRSL is an English novelist, short story writer, and former Chancellor of the University of East Anglia."
  },
  {
    "name": "Philip Roth",
    "books": [],
    "biography": " Philip Milton Roth was an American novelist and short-story writer. Roth's fiction—often set in his birthplace of Newark, New Jersey—is known for its intensely autobiographical character, for philosophically ..."
  },
  {
    "name": "Meg Rosoff",
    "books": [],
    "biography": " Meg Rosoff is an American writer based in London, United Kingdom. She is best known for the novel How I Live Now, which won the Guardian Prize, Printz Award, and Branford Boase Award and made the Whitbread Awards shortlist."
  }
];

const books = [
  {
      "title": "Things Fall Apart",
      "author": "Chinua Achebe",
      "isbn": "9780307743855",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/37781.jpg",
      "price": 56.95,
      "decription": "A simple story of a \"strong man\" whose life is dominated by fear and anger, Things Fall Apart is written with remarkable economy and subtle irony. Uniquely and richly African, at the same time it reveals Achebe's keen awareness of the human qualities common to men of all times and places.",
      "genre": "Fiction",
      "quantity": 30
  },
  {
      "title": "Arrow of God",
      "author": "Chinua Achebe",
      "isbn": "9780385014809",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/37774.jpg",
      "price": 45.00,
      "decription": "Set in the Igbo heartland of eastern Nigeria, one of Africa’s best-known writers describes the conflict between old and new in its most poignant aspect: the personal struggle between father and son. Ezeulu, the headstrong chief priest of the god Ulu, is worshipped by the six villages of Umuaro. But his authority is increasingly under threat—from rivals within his tribe, from functionaries of the colonial government, and even from his own family members. Yet he believes himself to be untouchable: surely he is an arrow in the bow of his God? Armed with this belief, he is prepared to lead his people, even if it is towards their own destruction. But his people will not be dominated so easily. Spare and powerful, Arrow of God is an unforgettable portrayal of the loss of faith, and the downfall of a man in a society forever altered by colonialism.",
      "genre": "Historical Fiction",
      "quantity": 15
  },
  {
      "title": "Jake's Thing",
      "author": "Kingsley Amis",
      "isbn": "9780140050967",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/SX342.jpg",
      "price": 100.21,
      "decription": "Nearing sixty, Jake goes in pursuit of his lost libido. But is sex really worth it? As liberationists abuse him; a hostess bores him into bed; and even his wife starts acting oddly, Jake seriously begins to wonder.",
      "genre": "Humor",
      "quantity": 10
  },
  {
      "title": "Lucky Jim",
      "author": "Kingsley Amis",
      "isbn": "9780140186307",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/395182.jpg",
      "price": 120.21,
      "decription": "Regarded by many as the finest, and funniest, comic novel of the twentieth century, Lucky Jim remains as trenchant, withering, and eloquently misanthropic as when it first scandalized readers in 1954. This is the story of Jim Dixon, a hapless lecturer in medieval history at a provincial university who knows better than most that “there was no end to the ways in which nice things are nicer than nasty ones.” Kingsley Amis’s scabrous debut leads the reader through a gallery of emphatically English bores, cranks, frauds, and neurotics with whom Dixon must contend in one way or another in order to hold on to his cushy academic perch and win the girl of his fancy. More than just a merciless satire of cloistered college life and stuffy postwar manners, Lucky Jim is an attack on the forces of boredom, whatever form they may take, and a work of art that at once distills and extends an entire tradition of English comic writing, from Fielding and Dickens through Wodehouse and Waugh. As Christopher Hitchens has written, “If you can picture Bertie or Jeeves being capable of actual malice, and simultaneously imagine Evelyn Waugh forgetting about original sin, you have the combination of innocence and experience that makes this short romp so imperishable.”",
      "genre": "Humor",
      "quantity": 25
  },
  {
      "title": "Emperor of Rome",
      "author": "Mary Beard",
      "isbn": "97803022988265",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/128747007.jpg",
      "price": 60.00,
      "decription": "A sweeping account of the social and political world of the Roman emperors by “the world’s most famous classicist” ( Guardian ). In her international bestseller SPQR , Mary Beard told the thousand-year story of ancient Rome. Now she shines her spotlight on the emperors who ruled the Roman empire, from Julius Caesar (assassinated 44 BCE) to Alexander Severus (assassinated 235 CE). Emperor of Rome is not your usual chronological account of Roman rulers, one after the mad Caligula, the monster Nero, the philosopher Marcus Aurelius. Beard asks bigger What power did emperors actually have? Was the Roman palace really so bloodstained? She tracks down the emperor at home, at the races, on his travels, even on his way to heaven. She introduces his wives and lovers, rivals and slaves, court jesters and soldiers-and the ordinary people who pressed begging letters into his hands. Emperor of Rome goes directly to the heart of Roman (and our own) fantasies about what it was to be Roman, offering an account of Roman history as it has never been presented before. 160 images; 16-page color insert",
      "genre": "History",
      "quantity": 13
  },
  {
      "title": "Religions of Rome",
      "author": "Mary Beard",
      "isbn": "9780521456463",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/167946.jpg",
      "price": 59.99,
      "decription": "This book, the 2nd of two volumes making up Religions of Rome, presents a range of documents illustrating religious life in the Roman world from the early Republic to the late Empire (visual evidence and texts in translation). More than just a sourcebook, it explores some of the major themes and problems of Roman religion such as sacrifice, the religious calendar, divination and prediction. Each document has an introduction, explanatory notes and bibliography, and is used as the starting point for discussion. Acknowledgements Preface Conventions and abbreviations 1 Earliest Rome 2 The deities of Rome 3 The calendar 4 Religious places 5 Festivals and ceremonies 6 Sacrifices 7 Divination and diviners 8 Priests and priestesses 9 Individuals and gods: life and death 10 Rome outside Rome 11 Threats to the Roman order 12 Religious groups 13 Perspectives Glossary Deities and their epithets Bibliography 1. Literary texts 2. Secondary literature Details of illustrations Index of texts cited General index",
      "genre": "Religion",
      "quantity": 5
  },
  {
      "title": "Trio",
      "author": "William Boyd",
      "isbn": "9780241295953",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/51889053.jpg",
      "price": 121.23,
      "decription": "A producer. A novelist. An actress.It is summer in 1968, the year of the assassinations of Martin Luther King and Robert Kennedy. While the world is reeling our trio is involved in making a rackety Swingin’ Sixties British movie in sunny Brighton. All are leading secret lives.As the film is shot, with its usual drastic ups and downs, so does our trio’s private, secret world begin to take over their public one. Pressures build inexorably – someone’s going to crack. Or maybe they all will.From one of Britain’s bestselling and best loved writers comes an exhilarating, tender novel that asks the vital questions: what makes life worth living? And what do you do if you find it isn’t?_______________________________________________PRAISE FOR WILLIAM BOYD’The ultimate in immersive fiction . . . magnificent’ Sunday Times’A finely judged performance: a deft and resonant alchemy of fact and fiction, of literary myth and imagination’ Guardian on Love is Blind’William Boyd has probably written more classic books than any of his contemporaries’ Daily Telegraph’Simply the best realistic storyteller of his generation’ Sebastian Faulks",
      "genre": "Literary Fiction",
      "quantity": 12
  },
  {
      "title": "Any Human Heart",
      "author": "William Boyd",
      "isbn": "9781400031009",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/77866.jpg",
      "price": 36.28,
      "decription": "Logan Gonzago Mountstuart, writer, was born in 1906, and died of a heart attack on October 5, 1991, aged 85. William Boyd’s novel Any Human Heart is his disjointed autobiography, a massive tome chronicling “my personal rollercoaster”–or rather, “not so much a rollercoaster”, but a yo-yo, “a jerking spinning toy in the hands of a maladroit child.” From his early childhood in Montevideo, son of an English corned beef executive and his Uraguayan secretary, through his years at a Norfolk public school and Oxford, Mountstuart traces his haphazard development as a writer. Early and easy success is succeeded by a long half-century of mediocrity, disappointments and setbacks, both personal and professional, leading him to multiple failed marriages, internment, alcoholism, and abject poverty. Mountstuart’s sorry tale is also the story of a British way of life in inexorable decline, as his journey takes in the Bloomsbury set, the General Strike, the Spanish Civil War, 1930s Americans in Paris, wartime espionage, New York avant garde art, even the Baader-Meinhof gang–all with a stellar supporting cast. The most sustained and best moment comes mid-book, as Mountstuart gets caught up in one of Britain’s murkier wartime secrets, in the company of the here truly despicable Duke and Duchess of Windsor. Elsewhere Boyd occasionally misplaces his tongue too obviously in his cheek–the Wall Street Crash is trailed with truly crashing inelegance–but overall Any Human Heart is a witty, inventive and ultimately moving novel. Boyd succeeds in conjuring not only a compelling 20th century but also, in the hapless Logan Mountstuart, an anti-hero who achieves something approaching passive greatness. –Alan Stewart, Amazon.co.uk",
      "genre": "Historical Fiction",
      "quantity": 19
  },
  {
      "title": "Jack Maggs",
      "author": "Peter Carey",
      "isbn": "9782259187695",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/640900.jpg",
      "price": 100.56,
      "decription": "The year is 1837 and ex-convict Jack Maggs has returned illegally to London from Australia. Installing himself in the household of a genteel grocer, he attracts the attention of a cross-section of society. Saucy Mercy Larkin wants him for a mate. Writer Tobias Oates wants to possess his soul through hypnosis. Maggs, a figure both frightening and mysteriously compelling, is so in thrall to the notion of a gentlemanly class that he’s risked his life to come back to his torturers. His task is to shed his false consciousness and understand that his true destiny lies in Australia.",
      "genre": "Cultural, Fiction",
      "quantity": 10
  },
  {
      "title": "Sorrow and Bliss",
      "author": "Peter Carey",
      "isbn": "9780571162727",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/49110165.jpg",
      "price": 200.91,
      "decription": "This novel, by the author of Oscar and Lucinda, tells the story of a man who, recovering from death, is convinced that he is in hell. For the first time in his life, Harry Joy sees the world as it really is, and takes up a notebook to explore and notate the true nature of the Underworld.",
      "genre": "Cultural, Fiction",
      "quantity": 100
  },
  {
      "title": "Middle England",
      "author": "Jonathan Coe",
      "isbn": "9780241309469",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/40175320.jpg",
      "price": 34.50,
      "decription": "Set in the Midlands and London over the last eight years, Jonathan Coe follows a brilliantly vivid cast of characters through a time of immense change and disruption in Britain. There are the early married years of Sophie and Ian who disagree about the future of Britain and, possibly, the future of their relationship; Sophie’s grandfather whose final act is to send a postal vote for the European referendum; Doug, the political commentator, whose young daughter despairs of his lack of political nous and Doug’s Remaining Tory politician partner who is savaged by the crazed trolls of Twitter. And within all these lives is the story of England itself: a story of nostalgia and irony; of friendship and rage, humour and intense bewilderment. As acutely alert to the absurdity of the political classes as he is compassionate about those who have been left behind, this is a novel Jonathan Coe was born to write.",
      "genre": "European Literature",
      "quantity": 20
  },
  {
      "title": "The Closed Circle",
      "author": "Jonathan Coe",
      "isbn": "9780375713958",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/137630.jpg",
      "price": 29.89,
      "decription": "The characters of The Rotters’ Club–Jonathan Coe’s beloved novel of adolescent life in the 1970s–have bartered their innocence for the vengeance of middle age in this incisive portrait of Cool Britannia at the millennium.",
      "genre": "British Literature",
      "quantity": 11
  },
  {
      "title": "Heart of Darkness",
      "author": "Joseph Conrad",
      "isbn": "9781892295491",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/4900.jpg",
      "price": 19.99,
      "decription": "Heart of Darkness, a novel by Joseph Conrad, was originally a three-part series in Blackwood’s Magazine in 1899. It is a story within a story, following a character named Charlie Marlow, who recounts his adventure to a group of men onboard an anchored ship. The story told is of his early life as a ferry boat captain. Although his job was to transport ivory downriver, Charlie develops an interest in investing an ivory procurement agent, Kurtz, who is employed by the government. Preceded by his reputation as a brilliant emissary of progress, Kurtz has now established himself as a god among the natives in “one of the darkest places on earth.” Marlow suspects something else of Kurtz: he has gone mad. A reflection on corruptive European colonialism and a journey into the nightmare psyche of one of the corrupted, Heart of Darkness is considered one of the most influential works ever written.",
      "genre": "Adventure",
      "quantity": 17
  },
  {
      "title": "Lord Jim",
      "author": "Joseph Conrad",
      "isbn": "9781551111728",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/12194.jpg",
      "price": 45.00,
      "decription": "Jim, a young British seaman, becomes first mate on the Patna, a ship full of pilgrims travelling to Mecca for the hajj. When the ship starts rapidly taking on water and disaster seems imminent, Jim joins his captain and other crew members in abandoning the ship and its passengers. A few days later, they are picked up by a British ship. However, the Patna and its passengers are later also saved, and the reprehensible actions of the crew are exposed. The other participants evade the judicial court of inquiry, leaving Jim to the court alone. He is publicly censured for this action and the novel follows his later attempts at coming to terms with his past. The novel is counted as one of 100 best books of the 20th century. Joseph Conrad (1857-1924), was a Polish author who wrote in English after settling in England. Conrad is regarded as one of the greatest novelists in English, though he did not speak the language fluently until he was in his twenties. He wrote stories and novels, often with a nautical setting, that depict trials of the human spirit in the midst of an indifferent world. He was a master prose stylist who brought a distinctly non-English tragic sensibility into English literature. Contents: Lord Jim Memoirs and Letters: A Personal Record; or Some Reminiscences The Mirror of the Sea Notes on Life and Letters Biography and Critical Essays: Joseph Conrad (A Biography) by Hugh Walpole Joseph Conrad by John Albert Macy A Conrad Miscellany by John Albert Macy Joseph Conrad by Virginia Woolf",
      "genre": "Adventure",
      "quantity": 30
  },
  {
      "title": "Open Me Carefully: Emily Dickinson’s Intimate Letters to Susan Huntington Dickinson (Paris Press)",
      "author": "Emily Dickinson",
      "isbn": "9780963818362",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/108114.jpg",
      "price": 39.60,
      "decription": "For the first time, selections from Emily Dickinson’s thirty-six year correspondence to her neighbor and sister-in-law, Susan Huntington Dickinson, are compiled in a single volume. Open Me Carefully invites a dramatic new understanding of Emily Dickinson’s life and work, overcoming a century of censorship and misinterpretation.For the millions of readers who love Emily Dickinson’s poetry, Open Me Carefully brings new light to the meaning of the poet’s life and work. Gone is Emily as lonely spinster; here is Dickinson in her own words, passionate and fully alive.",
      "genre": "Nonfiction",
      "quantity": 24
  },
  {
      "title": "I’m Nobody! Who Are You?",
      "author": "Emily Dickinson",
      "isbn": "9780439295765",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/1183398.jpg",
      "price": 34.88,
      "decription": "A brilliant new collection of Emily Dickinson’s poetry, introduced by acclaimed author Virginia Euwer Wolff. I’M NOBODY, WHO ARE YOU? is a collection of Emily Dickinson’s greatest poetry, from the wistful to the unsettling, the wonders of nature to the foibles of human nature.",
      "genre": "Anthologies",
      "quantity": 10
  },
  {
      "title": "Sky Key (Endgame, #2)",
      "author": "James Frey",
      "isbn": "9780062332639",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/24465662.jpg",
      "price": 27.77,
      "decription": "The sequel to the New York Times bestseller and international multimedia phenomenon, Endgame: The Calling. Endgame is here. Earth Key has been found. Two keys—and nine Players—remain. The keys must be found, and only one Player can win. Queens, New York. Aisling Kopp believes the unthinkable: that Endgame can be stopped. But before she can get home to regroup, she is approached by the CIA. They know about Endgame. And they have their own ideas about how it should be Played. Ideas that could change everything. Kingdom of Aksum, Ethiopia. Hilal ibn Isa al-Salt narrowly survived an attack that leaves him horribly disfigured. He now knows something the other Players do not. But the Aksumites have a secret that is unique to their line. A secret that can help redeem humanity—and maybe even be used to help defeat the beings behind Endgame. London, England. Sarah Alopay has found the first key. She is with Jago—and they are winning.But getting Earth Key has come at a great cost to Sarah. The only thing that keeps the demons at bay is Playing. Playing to win. Sky Key—wherever it is, whatever it is—is next. And the nine remaining Players will stop at nothing to get it.",
      "genre": "Dystopia",
      "quantity": 32
  },
  {
      "title": "A Million Little Pieces",
      "author": "James Frey",
      "isbn": "9781400079018",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/1241.jpg",
      "price": 140.23,
      "description": "At the age of 23, James Frey woke up on a plane to find his front teeth knocked out and his nose broken. He had no idea where the plane was headed nor any recollection of the past two weeks. An alcoholic for ten years and a crack addict for three, he checked into a treatment facility shortly after landing. There he was told he could either stop using or die before he reached age 24. This is Frey’s acclaimed account of his six weeks in rehab. From the Trade Paperback edition.",
      "genre": "Fiction",
      "quantity": 18
  },
  {
      "title": "In the Woods (Dublin Murder Squad, #1)",
      "author": "Tana French",
      "isbn": "9780143113492",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/2459785.jpg",
      "price": 11.89,
      "decription": "As dusk approaches a small Dublin suburb in the summer of 1984, mothers begin to call their children home. But on this warm evening, three children do not return from the dark and silent woods. When the police arrive, they find only one of the children gripping a tree trunk in terror, wearing blood-filled sneakers, and unable to recall a single detail of the previous hours. Twenty years later, the found boy, Rob Ryan, is a detective on the Dublin Murder Squad and keeps his past a secret. But when a twelve-year-old girl is found murdered in the same woods, he and Detective Cassie Maddox—his partner and closest friend—find themselves investigating a case chillingly similar to the previous unsolved mystery. Now, with only snippets of long-buried memories to guide him, Ryan has the chance to uncover both the mystery of the case before him and that of his own shadowy past. Richly atmospheric and stunning in its complexity, In the Woods is utterly convincing and surprising to the end.",
      "genre": "Crime",
      "quantity": 48
  },
  {
      "title": "Broken Harbour (Dublin Murder Squad, #4)",
      "author": "Tana French",
      "isbn": "9781444705102",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/10805160.jpg",
      "price": 100.20,
      "decription": "In Broken Harbour, a ghost estate outside Dublin – half-built, half-inhabited, half-abandoned – two children and their father are dead. The mother is on her way to intensive care. Scorcher Kennedy is given the case because he is the Murder Squad’s star detective. At first he and his rookie partner, Richie, think this is a simple one: Pat Spain was a casualty of the recession, so he killed his children, tried to kill his wife Jenny, and finished off with himself. But there are too many inexplicable details and the evidence is pointing in two directions at once. Scorcher’s personal life is tugging for his attention. Seeing the case on the news has sent his sister Dina off the rails again, and she’s resurrecting something that Scorcher thought he had tightly under control: what happened to their family, one summer at Broken Harbour, back when they were children. The neat compartments of his life are breaking down, and the sudden tangle of work and family is putting both at risk . . .",
      "genre": "Mystery Thriller",
      "quantity": 10
  },
  {
      "title": "Boom!",
      "author": "Mark Haddon",
      "isbn": "9780385616294",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/6116753.jpg",
      "price": 29.99,
      "decription": "Jim and his best friend Charlie bug the staff room, and overhear two teachers speak in a strange language. What does “spudvetch” mean? Why do Mr Kidd’s eyes flicker with fluorescent blue light when Charlie says spudvetch to him? A high-powered adventure can end only with a Boom!",
      "genre": "Adventure",
      "quantity": 16
  },
  {
      "title": "The Porpoise",
      "author": "Mark Haddon",
      "isbn": "9780385544313",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/41087290.jpg",
      "price": 97.80,
      "decription": "From the Whitbread and Los Angeles Times Prize-winning author of The Curious Incident of the Dog in the Night-Time , a stunningly ambitious, fantastical novel about the theft of female agency by rapacious men and the ways in which archetypal stories can warp history and the present Mark Haddon’s breathtaking novel begins with a harrowing plane crash: Maja, the pregnant wife of the unimaginably wealthy Philippe, is killed, but their daughter Angelica survives. Philippe’s obsession with the girl’s safety morphs into something sinister and grotesque as she grows into a beautiful teen. A young man named Darius, visiting Philippe with a business proposition, encounters Angelica and intuits their secret — he decides to rescue her, but the attempt goes awry and he flees England by sea. This contemporary story mirrors the ancient legend of Antiochus, whose love for the daughter of his dead wife was discovered by the adventurer Appolinus of Tyre. The tale appeared in many forms through the ages; Apollinus becoming the swashbuckling Pericles in Shakespeare’s eponymous play. In The Porpoise, as Angelique comes to terms with a life imprisoned on her father’s estate, Darius morphs into Pericles, voyaging through a mythic world. In a bravura feat of storytelling, Haddon recounts his many exploits in thrilling fashion, mining the meaning of the old legends while creating parallels with the monstrous modern world Angelica inhabits. The language is rich and gorgeous; the conjured worlds are perfectly imagined; the plot moves forward at a ferocious pace. But as much as Haddon plays with myth and meaning, his themes speak deeply to the current moment. As profound as it is entertaining, The Porpoise is a major literary achievement by an author whose myriad talents are on full, vivid display.",
      "genre": "Contemporary",
      "quantity": 31
  },
  {
      "title": "The Divided Self: An Existential Study in Sanity and Madness",
      "author": "R.D. Laing",
      "isbn": "9780140135374",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/496585.jpg",
      "price": 53.74,
      "decription": "In The Divided Self (1960), Laing contrasted the experience of the “ontologically secure” person with that of a person who “cannot take the realness, aliveness, autonomy and identity of himself and others for granted” and who consequently contrives strategies to avoid “losing his self”. Laing explains how we all exist in the world as beings, defined by others who carry a model of us in their heads, just as we carry models of them in our heads. In later writings he often takes this to deeper levels, laboriously spelling out how “A knows that B knows that A knows that B knows…”! Our feelings and motivations derive very much from this condition of “being in the world” in the sense of existing for others, who exist for us. Without this we suffer “ontological insecurity”, a condition often expressed in terms of “being dead” by people who are clearly still physically alive. This watershed work aimed to make madness comprehensible, and in doing so revolutionized the way we perceive mental illness. Using case studies of patients he had worked with, psychiatrist R. D. Laing argued that psychosis is not a medical condition, but an outcome of the ‘divided self’, or the tension between the two personas within us: one our authentic, private identity, and the other the false, ‘sane’ self that we present to the world. Laing’s radical approach to insanity offered a rich existential analysis of personal alienation and made him a cult figure in the 1960s, yet his work was most significant for its humane attitude, which put the patient back at the centre of treatment. R.D. Laing (1927-1989), one of the best-known psychiatrists of modern times, was born in Glasgow, Scotland. This work is available on its own or as part of the 7 volume set iSelected Works of R. D. Laing",
      "genre": "Mental Health",
      "quantity": 13
  },
  {
      "title": "Knots",
      "author": "R.D. Laing",
      "isbn": "0394717767",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/993238.jpg",
      "price": 77.67,
      "decription": "R.D. Laing’s new book marks a fascinating departure–in form and content–from his previous works. Knots is unlike any other book, consisting of a series of powerful, witty, unexpected dialogue-scenarios that can be read as poems or brief plays, each complete in itself. Each chapter describes a different kind of relationship–the and “knots and ” of the title–bonds of love, dependency, uncertainty, jealousy. The dialogues could be those between lovers, between parents and children, between analysts and patients–or all of these merged together. Each brilliantly demonstrates Laing’s marvelous insights into the intricacies of human relationships, displaying his talents not only as an analyst but as a poet and playwright.",
      "genre": "Nonfiction",
      "quantity": 94
  },
  {
      "title": "Changing Places (The Campus Trilogy, #1)",
      "author": "David Lodge",
      "isbn": "9780140170986",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/69933.jpg",
      "price": 98.14,
      "decription": "The plate-glass, concrete jungle of Euphoria State University, USA, and the damp red-brick University of Rummidge have an annual exchange scheme. Normally the exchange passes without comment. But when Philip Swallow swaps with Professor Zapp, the Fates play a hand, and the two academics find themselves enmeshed in a spiralling involvement on opposite sides of the Atlantic. Nobody is immune: students, colleagues, even wives are swapped as the tension increases Finally, the cat is let out of the bag with a flourish that surprises even the author himself.",
      "genre": "European Literature",
      "quantity": 10
  },
  {
      "title": "Nice Work",
      "author": "David Lodge",
      "isbn": "9780140133967",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/69935.jpg",
      "price": 33.14,
      "decription": "When Vic Wilcox, MD of Pringle’s engineering works, meets English lecturer Dr Robyn Penrose, sparks fly as their lifestyles and ideologies collide head on. But, in time, both parties make some surprising discoveries about each other’s worlds – and about themselves. When Vic Wilcox, MD of Pringle’s engineering works, meets English lecturer Dr Robyn Penrose, sparks fly as their lifestyles and ideologies collide head on. But, in time, both parties make some surprising discoveries about each other’s worlds – and about themselves.",
      "genre": "Academia",
      "quantity": 67
  },
  {
      "title": "Madame de Pompadour",
      "author": "Nancy Mitford",
      "isbn": "9780940322653",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/153529.jpg",
      "price": 26.53,
      "decription": "When Madame de Pompadour became the mistress of Louis XV, no one expected her to retain his affections for long. A member of the bourgeoisie rather than an aristocrat, she was physically too cold for the carnal Bourbon king, and had so many enemies that she could not travel publicly without risking a pelting of mud and stones. History has loved her little better. Nancy Mitford’s delightfully candid biography recreates the spirit of 18th-century Versailles with its love of pleasure and treachery. We learn and see France increasingly overcome with class conflict. With a fiction writer’s felicity, Mitford restores the royal mistress and celebrates her as a survivor, unsurpassed in “the art of living,” who reig",
      "genre": "Historical",
      "quantity": 94
  },
  {
      "title": "Highland Fling",
      "author": "Nancy Mitford",
      "isbn": "9780345806956",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/153577.jpg",
      "price": 80.60,
      "decription": "In Highland Fling – Nancy Mitford’s first novel, published in 1931 – a set of completely incompatible and hilariously eccentric characters collide in a Scottish castle, where bright young things play pranks on their stodgy elders until the frothy plot climaxes in ghost sightings and a dramatic fire. Inspired in part by Mitford’s youthful infatuation with a Scottish aristocrat, her story follows young Jane Dacre to a shooting party at Dulloch Castle, where she tramps around a damp and chilly moor on a hunting expedition with formidable Lady Prague, xenophobic General Murgatroyd, one-eyed Admiral Wenceslaus, and an assortment of other ancient and gouty peers of the realm, while falling in love with Albert, a surrealist painter with a mischievous sense of humor. Lighthearted and sparkling with witty banter, Highland Fling was Mitford’s first foray into the delightful fictional world for which the author of The Pursuit of Love and Love in a Cold Climate later became so celebrated.With an Introduction by Julian Fellowes, creator of Downton Abbey.",
      "genre": "British Literature",
      "quantity": 56
  },
  {
      "title": "Keeper (Paul Faustino, #1)",
      "author": "Mal Peet",
      "isbn": "9780763632861",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/152268179.jpg",
      "price": 61.00,
      "decription": "and “This stirring adventure — a soccer story? a ghost story? — defies expectations. . . . Both lyrical and gripping. and ” — KIRKUS REVIEWS (starred review)When Paul Faustino of LA NACION flips on his tape recorder for an exclusive interview with El Gato — the phenomenal goalkeeper who single-handedly brought his team the World Cup — the seasoned reporter quickly learns that this will be no ordinary story. Instead, the legendary El Gato narrates a spellbinding tale that begins in the South American rainforest, where a ghostly but very real mentor, the Keeper, emerges to teach a poor, gawky boy the most thrilling secrets of the game. A seamless blend of magic realism and exhilarating soccer action, this evocative novel will haunt readers long after the story ends.",
      "genre": "Fantasy",
      "quantity": 82
  },
  {
      "title": "Tamar",
      "author": "Mal Peet",
      "isbn": "9780763634889",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/357160.jpg",
      "price": 63.76,
      "decription": "When her grandfather dies, Tamar inherits a box containing a series of clues and coded messages. Out of the past, another Tamar emerges, a man involved in the terrifying world of resistance fighters in Nazi-occupied Holland half a century before. His story is one of passionate love, jealousy, and tragedy set against the daily fear and casual horror of the Second World War — and unraveling it is about to transform Tamar’s life forever. From acclaimed British sensation Mal Peet comes a masterful story of adventure, love, secrets, and betrayal in time of war, both past and present.",
      "genre": "Teen",
      "quantity": 89.88
  },
  {
      "title": "Transit",
      "author": "Rachel Cusk",
      "isbn": "9780374278625",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/29939363.jpg",
      "price": 74.80,
      "decription": "The stunning second novel of a trilogy that began with Outline, one of The New York Times Book Review’s ten best books of 2015. In the wake of family collapse, a writer and her two young sons move to London. The process of upheaval is the catalyst for a number of transitions—personal, moral, artistic, practical—as she endeavors to construct a new reality for herself and her children. In the city she is made to confront aspects of living she has, until now, avoided, and to consider questions of vulnerability and power, death and renewal, in what becomes her struggle to reattach herself to, and believe in, life. Filtered through the impersonal gaze of its keenly intelligent protagonist, Transit sees Rachel Cusk delve deeper into the themes first raised in her critically acclaimed Outline, and offers up a penetrating and moving reflection on childhood and fate, the value of suffering, the moral problems of personal responsibility, and the mystery of change. In this precise, short, and yet epic cycle of novels, Cusk manages to describe the most elemental experiences, the liminal qualities of life, through a narrative near-silence that draws language toward it. She captures with unsettling restraint and honesty the longing to both inhabit and flee one’s life and the wrenching ambivalence animating our desire to feel real.",
      "genre": "Literary Fiction",
      "quantity": 80
  },
  {
      "title": "Saving Agnes",
      "author": "Rachel Cusk",
      "isbn": "9780312252564",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/60213492.jpg",
      "price": 64.97,
      "decription": "Agnes Day is mildly discontent. As a child, she never wanted to be an Agnes — she wanted to be a pleasing Grace. But alas, she remained the terminally middle class, hopelessly romantic Agnes.Living with her two best friends in London and working at a trade magazine, Agnes feels that life and love seem to go on without her. But then she discovers that her roommates and her boyfriend are keeping secrets from her, and that her boss is quitting and leaving her in charge. In great despair, she decides to make it her business to set things straight.",
      "genre": "Coming Of Age",
      "quantity": 52
  },
  {
      "title": "Coasting: A Private Voyage",
      "author": "Jonathan Raban",
      "isbn": "9780375725937",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/366835.jpg",
      "price": 59.25,
      "decription": "From the national bestselling, National Book Critics Circle Award-winning author of Bad Land comes “a lively, intensely personal recounting of a voyage into a gifted writer’s country and self” ( The New York Times Book Review ).Put Jonathan Raban on a boat and the results will be fascinating, and never more so than when he’s sailing around the serpentine, 2,000-mile coast of his native England. In this acutely perceived and beautifully written book, the bestselling author of Bad Land turns that voyage-which coincided with the Falklands war of 1982-into an occasion for meditations on his country, his childhood, and the elusive notion of home.Whether he’s chatting with bored tax exiles on the Isle of Man, wrestling down a mainsail during a titanic gale, or crashing a Scottish house party where the kilted guests turn out to be Americans, Raban is alert to the slightest nuance of meaning. One can read Coasting for his precise naturalistic descriptions or his mordant comments on the new England, where the principal industry seems to be the marketing of Englishness. But one always reads it with pleasure.",
      "genre": "History",
      "quantity": 37
  },
  {
      "title": "Passage to Juneau: A Sea and Its Meanings",
      "author": "Jonathan Raban",
      "isbn": "9780679776147",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/258812.jpg",
      "price": 69.77,
      "decription": "With the same rigorous observation (natural and social), invigorating stylishness, and encyclopedic learning that he brought to his National Book Award-winning Bad Land, Jonathan Raban conducts readers along the Inside Passage from Seattle to Juneau. The physical distance is 1,000 miles of difficult-and often treacherous-water, which Raban navigates solo in a 35-foot sailboat. But Passage to Juneau also traverses a gulf of centuries and cultures: the immeasurable divide between the Northwest’s Indians and its first European explorers– between its embattled fishermen and loggers and its pampered new class. Along the way, Raban offers captivating discourses on art, philosophy, and navigation and an unsparing narrative of personal loss.",
      "genre": "Adventure",
      "quantity": 47
  },
  {
      "title": "The Gustav Sonata",
      "author": "Rose Tremain",
      "isbn": "9781784740030",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/26127593.jpg",
      "price": 350,
      "decription": "Gustav Perle grows up in a small town in Switzerland, where the horrors of the Second World War seem only a distant echo. An only child, he lives alone with Emilie, the mother he adores but who treats him with bitter severity. He begins an intense friendship with a Jewish boy his age, talented and mercurial Anton Zweibel, a budding concert pianist. Moving backward to the war years and the painful repercussions of an act of conscience, and forward through the lives and careers of two men, The Gustav Sonata explores the passionate love of childhood friendship as it is lost, transformed, and regained over a lifetime. Moving between the 1930s and the 1990s, this fierce and beautifully orchestrated novel explores the vast human issues of racism and tolerance, flight and refuge, cruelty and tenderness. It is a powerful and deeply moving addition to the beloved oeuvre of one of our greatest contemporary novelists.",
      "genre": "Fiction",
      "quantity": 10
  },
  {
      "title": "Music and Silence",
      "author": "Rose Tremain",
      "isbn": "9780099268550",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/6167.jpg",
      "price": 68.99,
      "decription": "In the year 1629, a young English lutenist named Peter Claire arrives at the Danish Court to join King Christian IV’s Royal Orchestra. From the moment when he realises that the musicians perform in a freezing cellar underneath the royal apartments, Peter Claire understands that he’s come to a place where the opposing states of light and dark, good and evil, are waging war to the death. Designated the King’s ‘Angel’ because of his good looks, he finds himself falling in love with the young woman who is the companion of the King’s adulterous and estranged wife, Kirsten. With his loyalties fatally divided between duty and passion, how can Peter Claire find the path that will realise his hopes and save his soul?",
      "genre": "British Literature",
      "quantity": 55
  },
  {
      "title": "American Pastoral (The American Trilogy, #1)",
      "author": "Philip Roth",
      "isbn": "0375701427",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/11650.jpg",
      "price": 57.70,
      "decription": "As the American century draws to an uneasy close, Philip Roth gives us a novel of unqualified greatness that is an elegy for all our century’s promises of prosperity, civic order, and domestic bliss. Roth’s protagonist is Swede Levov, a legendary athlete at his Newark high school, who grows up in the booming postwar years to marry a former Miss New Jersey, inherit his father’s glove factory, and move into a stone house in the idyllic hamlet of Old Rimrock. And then one day in 1968, Swede’s beautiful American luck deserts him. For Swede’s adored daughter, Merry, has grown from a loving, quick-witted girl into a sullen, fanatical teenager—a teenager capable of an outlandishly savage act of political terrorism. And overnight Swede is wrenched out of the longer-for American pastoral and into the indigenous American berserk. Compulsively readable, propelled by sorrow, rage, and a deep compassion for its characters, this is Roth’s masterpiece.",
      "genre": "Classics",
      "quantity": 42
  },
  {
      "title": "Sabbath’s Theater",
      "author": "Philip Roth",
      "isbn": "0679772596",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/11654.jpg",
      "price": 79.96,
      "decription": "Winner of the National Book Award for Fiction Sabbath’s Theater is a comic creation of epic proportions, and Mickey Sabbath is its gargantuan hero. At sixty-four Sabbath is still defiantly antagonistic and exceedingly libidinous; sex is an obsession and a principle, an instrument of perpetual misrule in his daily existence. But after the death of his long-time mistress – an erotic free spirit whose great taste for the impermissible matches his own – Sabbath embarks on a turbulent journey into his past. Bereft and grieving, tormented by the ghosts of those who loved and hated him, he contrives a succession of farcical disasters that take him to the brink of madness and extinction.",
      "genre": "Literature",
      "quantity": 25
  },
  {
      "title": "What I Was",
      "author": "Meg Rosoff",
      "isbn": "9780670018444",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/1220721.jpg",
      "price": 67.44,
      "description": "An unusual coming-of-age story that examines the fluidity of identity and the ways in which people consciously redefine themselves in the face of love.In the not too distant future, a one-hundred-year-old man called H sails the eastern coast of England with his godson. H recalls when he himself was sixteen–his godson’s age–as they search for the site of H’s life-altering friendship with a boy named Finn. Finn lives alone on an isolated slip of land and follows no rules: he spends his days swimming, fishing, and collecting driftwood for his tiny beach hut. H, on the other hand, is an upper-class boarding school boy stifled by monotony and endless rules. They meet by chance on the beach, and H is immediately awed by (and jealous of) Finn’s way of life. They strike up an unlikely friendship but the gap between their lives becomes difficult to bridge, and before long the idyll that nurtured their relationship is shattered by heart-wrenching scandal. Meg Rosoff was formerly a YA author, but her work transcends categorization and we are delighted to bring it to adult readers for the first time. What I Was is a timeless, enthralling story destined to become a classic.",
      "genre": "Coming Of Age",
      "quantity": 97
  },
  {
      "title": "Picture Me Gone",
      "author": "Meg Rosoff",
      "isbn": "9780399257650",
      "imageUrl": "https://d5yfek0dwuvht.cloudfront.net/17465457.jpg",
      "price": 76.50,
      "decription": "Printz Award-winning author Meg Rosoff’s latest novel is a gorgeous and unforgettable page-turner about the relationship between parents and children, love and loss.Mila has an exceptional talent for reading a room–sensing hidden facts and unspoken emotions from clues that others overlook. So when her father’s best friend, Matthew, goes missing from his upstate New York home, Mila and her beloved father travel from London to find him. She collects information about Matthew from his belongings, from his wife and baby, from the dog he left behind and from the ghosts of his past–slowly piecing together the story everyone else has missed. But just when she’s closest to solving the mystery, a shocking betrayal calls into question her trust in the one person she thought she could read best.",
      "genre": "Mystery",
      "quantity": 80
  }
]


module.exports = {
  authors,
  books
}

