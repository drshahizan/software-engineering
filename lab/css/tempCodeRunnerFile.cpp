#include <iostream>
#include <string>
#include <algorithm>
 using namespace std;
class Exercise3 {
public:
    static string reverse(string str) {
        reverse(str.begin(), str.end());
        return str;
    }
};

int main() {
    string original = "margorp technique 2 silocated at level-noon 5.";
    string final_sentence;

    string reversed_word = Exercise3::reverse(original.substr(0, 7));
    cout << "Reversed word: " << reversed_word << endl;

    final_sentence.insert(0, reversed_word + " ");
    final_sentence.replace(23, 9, Exercise3::reverse(original.substr(17, 9)));

    cout << "Final sentence: " << final_sentence << std::endl;

    return 0;
}
