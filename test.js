class Solution 
{
    //Function to reverse words in a given string.
    reverseWords(s)
    {
        if(s.length>1){
            let reverseWord = "";
          for (i = s.length - 1; i >=0; i--){
              reverseWord+= s[i];
          }
            return reverseWord;
        }
    }
}