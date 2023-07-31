import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ nullable: true, length: 5 })
  number?: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;
}

export { Addresses };
