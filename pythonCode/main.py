import spacy
# nlp = spacy.download('en_core_web_sm')
nlp = spacy.load('en_core_web_sm')

movieScripts = open("aiMovieScripts.txt", "r", encoding='utf8')
movieLines = movieScripts.read()
movieStrings = str(movieLines)
print(movieStrings) # Prints all movie lines

songLyrics = open("aiSongLyrics.txt", "r", encoding='utf8')
songLines = songLyrics.read()
songStrings = str(songLines)
print(songStrings) # Prints all song lyrics

songWords = nlp(songStrings)
for token in songWords:
        print(token.text, "->", token.pos_) # Prints each word and assigns their part of speech (like verbs and nouns)

