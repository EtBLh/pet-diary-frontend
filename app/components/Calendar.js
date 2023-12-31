import React, { useState, Fragment, useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Calendar , CalendarUtils } from 'react-native-calendars';
import { useEffect } from 'react';



const PetCalendar = (props) => {

    let today = new Date();

    const onDayPress = useCallback((day) => {
        console.log('pressed: '+day.dateString)
        //TODO jump to diary page 
    }, []);

    // const marked = {};

    const [marked, setMarked] = useState({});

    useEffect(() => {
        getMainPageDates();
    }, []);

    const getMainPageDates = async () => {
        const apiUrl = 'http://107.191.60.115:81/Main/GetMainPageDateInfo';

        const requestData = {
            userID: 'username_password',
            petID: 'username_petName',
            year: '2024',
            month: '1',
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch main page dates');
            }

            const responseData = await response.json();

            // Assuming responseData.date is an array of date strings
            const newMarked = {};
            responseData.date.forEach(date => {
                newMarked[date[0]] = { marked: true };
            });

            // Update the marked state with the new dates
            setMarked((prevMarked) => ({ ...prevMarked, ...newMarked }));

            // Now you can use the existing marked object with the new dates
            console.log(marked);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const onMonthChange = (month) => {
        // Extract year and month from the month string (e.g., "2023-01")
        const [year, monthStr] = month.split('-');
        const selectedMonth = parseInt(monthStr);

        getMainPageDates(year, selectedMonth);
    };

    

    // const marked = {
    //     [CalendarUtils.getCalendarDateString(today - 1)]: {
    //         marked: true
    //     },
    // }

    return (
        
        <Calendar
            current={CalendarUtils.getCalendarDateString(today)}
            theme={{
                backgroundColor: 'transparent',
                calendarBackground: 'transparent',
                textDayHeaderFontFamily: 'PressStart2P-Regular',
                textSectionTitleColor: 'rgba(0,0,0,0.6)',
                textDayHeaderFontSize: 10,
                textMonthFontFamily: 'PressStart2P-Regular',
                textMonthFontSize: 12,
                monthTextColor: 'rgba(0,0,0,0.8)',
                arrowColor: "black"
            }}
            style={styles.calendar}
            onDayPress={onDayPress}
            markedDates={marked}
            dayComponent={({date, state, onPress, marking}) => {
                return (
                  <TouchableOpacity onPress={() => onPress(date)}>
                    <Text style={[styles.day, styles[state+'day'],marking?styles.marked:undefined]}>
                      {date?.day}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            onVisibleMonthsChange={(months) => onMonthChange(months[0].dateString)}
        />
    );
};

export default PetCalendar;

const styles = StyleSheet.create({
    calendar: {
        marginBottom: 10,
        backgroundColor: 'transparent',
        fontFamily: 'PressStart2P-Regular'
    },
    day: {
        borderWidth: 3,
        borderColor: "rgba(0,0,0,0)",
        fontFamily: 'PressStart2P-Regular',
        fontSize: 10,
        padding: 2,
        backgroundColor: 'transparent'
    },
    disabledday: {
        color: "rgba(0,0,0,0.4)"
    },
    inactiveday: {
        color: "rgba(0,0,0,0.4)"
    },
    todayday: {
        backgroundColor: "rgba(0,0,0,0.2)"
    },
    marked: {
        borderColor: "rgba(0,0,0,0.4)"
    }
});