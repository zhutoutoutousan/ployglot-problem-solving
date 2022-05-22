class Solution:
    def longestWord(self, words: List[str]) -> str:
        words.sort()
        longest = ''
        for word in words:
            if len(word) > len(longest) or (len(word) == len(longest) and word < longest):
                if self.is_valid(word, words):
                    longest = word
        return longest

    def is_valid(self, word, words):
        if word == '':
            return True
        for w in words:
            if w.startswith(word):
                return self.is_valid(w, words)
        return False