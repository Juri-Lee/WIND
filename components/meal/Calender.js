import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default class Calender extends React.Component {

    state = {
        activeDate: new Date()
    }

    months = ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October",
        "November", "December"];

    weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    _onPress = (item) => {
        this.setState(() => {
            if (!item.match && item != -1) {
                this.state.activeDate.setDate(item);
                return this.state;
            }
        });
    };

    generateMatrix = () => {
        var matrix = [];
        var counter = 1;
        var year = this.state.activeDate.getFullYear();
        var month = this.state.activeDate.getMonth();
        var firstDay = new Date(year, month, 1).getDay();

        matrix[0] = this.weekDays;
        var maxDays = this.nDays[month];
        if (month == 1) { // February
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                maxDays += 1;
            }
        }

        for (var row = 1; row < 7; row++) {
            matrix[row] = [];
            for (var col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row == 1 && col >= firstDay) {
                    // Fill in rows only after the first day of the month
                    matrix[row][col] = counter++;
                } else if (row > 1 && counter <= maxDays) {
                    // Fill in rows only if the counter's not greater than
                    // the number of days in the month
                    matrix[row][col] = counter++;
                }
            }
        }
        return matrix;
    }

    changeMonth = (n) => {
        this.setState(() => {
            this.state.activeDate.setMonth(
                this.state.activeDate.getMonth() + n
            )
            return this.state;
        });
    }

    render() {
        var matrix = this.generateMatrix();
        var rows = [];

        rows = matrix.map((row, rowIndex) => {
            var rowItems = row.map((item, colIndex) => {
                return (
                    <View style={{ height: rowIndex == 0 ? 20 : '100%', width: '14%', position: 'relative' }}>

                        <Text
                            style={{
                                position: rowIndex == 0 ? 'relative' : 'absolute',
                                top: 0,
                                left: 0,
                                flex: 1,
                                height: 18,
                                textAlign: 'center',
                                // Highlight header
                                backgroundColor: '#fff',
                                // Highlight Sundays
                                color: colIndex == 0 ? '#a00' : '#000',
                                fontWeight: item == (this.state.activeDate.getDate())
                                    ? 'bold' : ''
                            }}
                            onPress={() => this._onPress(item)}>
                            {item != -1 ? item : ''}
                        </Text>
                    </View>
                );
            });
            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        padding: rowIndex == 0 ? 5 : 3,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        borderBottomWidth: rowIndex == 6 ? 0 : 1,
                        borderBottomColor: '#ccc',


                    }}>
                    {rowItems}
                </View>

            );
        });


        return (

            <View style={styles.container}>

                <View style={styles.inner}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Ionicons name={'ios-arrow-dropleft'}
                            touchActive="true"
                            size={30}
                            color={'#656084'}
                            style={{
                                alignContent: 'center', margin: 3,
                            }}
                            onPress={() => this.changeMonth(-1)}
                        />
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            textAlign: 'center',
                            color: '#656084'
                        }}>
                            {this.months[this.state.activeDate.getMonth()]} &nbsp;
            {this.state.activeDate.getFullYear()}
                        </Text>
                        <Ionicons name={'ios-arrow-dropright'}
                            touchActive="true"
                            size={30}
                            color={'#656084'}
                            style={{
                                alignContent: 'center', margin: 3,
                            }}
                            onPress={() => this.changeMonth(+1)}
                        />
                    </View>
                    {rows}

                </View>

                <View style={styles.under}>
                    <Text style={{ color: '#fff', fontSize: 16, borderBottomColor: '#fff', borderBottomWidth: 0.5, width: '40%', textAlign: 'center' }}>{this.months[this.state.activeDate.getMonth()]} {this.state.activeDate.getDate()}</Text>

                </View>
            </View>


        )
    }
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#715c84',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        position: 'relative',

    },
    inner: {
        padding: 5,
        backgroundColor: '#fff',
        marginTop: 70,
        width: '90%',
        height: '60%',
        borderRadius: 15,
    },
    under: {
        height: '23%',
        width: '90%',
        // borderColor: 'white',
        // borderWidth: 1,
        marginTop: 10,
        padding: 5
    }
})