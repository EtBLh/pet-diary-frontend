import React, { useState, Fragment, useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Calendar , CalendarUtils } from 'react-native-calendars';



const PetCalendar = (props) => {

    let today = new Date();

    const onDayPress = useCallback((day) => {
        console.log('pressed: '+day.dateString)
        //TODO jump to diary page 
    }, []);

    const marked = {
        [CalendarUtils.getCalendarDateString(today - 1)]: {
            marked: true
        },
    }

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