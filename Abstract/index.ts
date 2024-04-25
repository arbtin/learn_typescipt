import { Coach } from './Coach';
import { FootballCoach } from './FootballCoach';
import { GolfCoach } from './GolfCoach';

let newFootballCoach = new FootballCoach();
//console.log(newFootballCoach.getDailyWorkout());

let newGolfCoach = new GolfCoach();
//console.log(newGolfCoach.getDailyWorkout());

let coaches: Coach[] = [];

coaches.push(newGolfCoach);
coaches.push(newFootballCoach);

for (let workout of coaches) {
  console.log(workout.getDailyWorkout());
}
