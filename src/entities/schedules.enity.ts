import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Properties } from "./properti.enity";
import { User } from "./user.enity";

@Entity("schedules_users_properties")
class Schedules {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Properties, (property) => property.schedules)
  property: Properties;

  @ManyToOne(() => User, (user) => user.schedules)
  user: User;
}

export { Schedules };
