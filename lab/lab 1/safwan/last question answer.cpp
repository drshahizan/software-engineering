#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

struct dataAcc{
    int numAcc[10];
    string state;
    float avg;
};

void displayLine();
float calc_Avg(int*);
void find_HighLow(dataAcc*);

const int NUM_STATE = 14;
const int NUM_YEAR = 10;

ofstream out;

int main(){
    dataAcc data[NUM_STATE];
    int num;
    string state;
    ifstream in;
    in.open ("/Users/haziq/Desktop/SECJ1013/input.txt");

    for (int i = 0; i < NUM_STATE; i++){
        for (int j = 0; j < NUM_YEAR; j++){
            in >> num;
            data[i].numAcc[j] = num;
        }
        getline(in, state);
        data[i].state = state;
        data[i].avg = calc_Avg(data[i].numAcc);
    }
    in.close();

    out.open ("/Users/haziq/Desktop/SECJ1013/output.txt");
    displayLine();
    out << right << setw(10) << "STATE" << setw(7) << "";

    for (int y = 2006; y < 2016; y++){
        out << right << setw(7) << y ;
    }

    out << right << setw(10) << "AVERAGE" << endl;
    displayLine();

    for (int x = 0; x < NUM_STATE; x++){
        out << left << setw(17) << data[x].state;

        for (int z = 0; z < NUM_YEAR; z++){
            out << right << setw(7) << data[x].numAcc[z];
        }
        out << fixed << setprecision(1);
        out << right << setw(10) << data[x].avg << endl;
    }
    displayLine();
    find_HighLow(data);
    displayLine();
    out.close();
    return 0;
}

void displayLine(){
    for (int i = 0; i < 98; i++)
        out << "-";
    out << endl;
}

float calc_Avg(int* num){
    int total = 0;
    for (int i = 0; i < NUM_YEAR; i++)
        total += num[i];
    return (static_cast<float>(total)/NUM_YEAR);
}

void find_HighLow(dataAcc* d){
    int max , max_year;
    string max_state;
    for (int i = 0; i < NUM_STATE; i++){
        for (int j = 0; j < NUM_YEAR; j++){
            if(d[i].numAcc[j] > max){
                max = d[i].numAcc[j];
                max_state = d[i].state;
                max_year = 2006 + j;
            }
        }
    }
    out << "The highest number of road accidents = ";

    out << max << " at" << max_state << " on "<< max_year << endl;
}
//close the file
//function definition
//function definition
//function definition
//store the highest number, state and