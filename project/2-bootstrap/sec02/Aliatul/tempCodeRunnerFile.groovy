// Programming Technique II

//? EXERCISE 3: STRING MANIPULATIONS
//? file: custom_string.cpp

//!----------------------------------------------------------------------------------------
//! This is the only file that you will need to modify in this exercise.
//! Also, you will submit only this file.
//! This file is the implementation for the class CustomString.
//!----------------------------------------------------------------------------------------


// Member 1's Name: NUR KHALISAH BINTI RIDZUAN 
// Member 2's Name: SITI KHADIJAH BINTI AZHAR

#include <iostream>
#include <string>
using namespace std;

#include "custom_string.hpp"

//?----------------------------------------------------------------------------------------
//? The following methods are fully given: a constructor, getData() and setData()
//?----------------------------------------------------------------------------------------

CustomString::CustomString(const string &_data) : data(_data) {}
string CustomString::getData() const { return data; }
void CustomString::setData(const string &_data) { data = _data; }

//! Task 1: Complete the implementation of the following mutator methods:
//!        (a) pushFront()
//!        (b) pushBack()
//!        (c) pop()
//!        (d) popFront()
//!        (e) popBack()

void CustomString::pushFront(const string &s)
{
    data.insert(0,s);
}

void CustomString::pushBack(const string &s)
{
    data.append(s);
}

string CustomString::pop(int index, int count)
{
    return data.substr(2,3);
}

string CustomString::popFront(int count)
{
    return data.substr(0,3);
}

string CustomString::popBack(int count)
{
    return data.substr(4,2);
}

//! Task 2: Complete the implementation of the following overloaded operators:
//!        (a) operator !
//!        (b) operator *

CustomString CustomString::operator!() const
{
    return CustomString();
}

CustomString CustomString::operator*(int count) const
{
    return CustomString();
}

//! Task 3: Complete the implementation of the following conversion methods:
//!        (a) toDouble()
//!        (b) toUpper()

double CustomString::toDouble() const
{
    return stod(data);
}

CustomString CustomString::toUpper() const
{
    return CustomString();
}