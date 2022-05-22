class Solution {
    public String longestWord(String[] words) {
        // Trie data structure
        TrieNode root = new TrieNode();
        for (String word : words) {
            TrieNode current = root;
            for (char c : word.toCharArray()) {
                if (current.children[c - 'a'] == null) {
                    current.children[c - 'a'] = new TrieNode();
                }
                current = current.children[c - 'a'];
            }
            current.isWord = true;
        }

        // DFS
        String result = "";
        dfs(root, "", result);

        return result;
    }

    private void dfs(TrieNode root, String word, String result) {
        if (root.isWord) {
            if (word.length() > result.length() || (word.length() == result.length() && word.compareTo(result) < 0)) {
                result = word;
            }            
        }
        for (int i = 0; i < 26; i++) {
            if (root.children[i] != null) {
                dfs(root.children[i], word + (char)(i + 'a'), result);
            }
        }
    }

}