class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) {
            return "";
        }
        String startStr = strs[0];

        for (int i = 0; i < strs.length; i++) {
            int j = 0;
            for (; j < startStr.length() && j < strs[i].length(); j++) {
                if (strs[i].charAt(j) != startStr.charAt(j)) {
                    break;
                }
            }

            startStr = startStr.substring(0, j);
            if (startStr.equals("")) {
                return startStr;
            }
        }

        return startStr;
    }
}