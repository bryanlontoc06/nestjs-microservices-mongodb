import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from '../dto/create-student.dto';
import { Student } from '../schema/student.schema';

@Injectable()
export class StudentsService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

  async createStudent(createStudentDto: CreateStudentDto) {
    const newStudent = new this.studentModel(createStudentDto);
    return newStudent.save();
  }

  async getAllStudents(): Promise<Student[]> {
    const studentData = await this.studentModel.find();
    if (!studentData || studentData.length === 0) {
      throw new NotFoundException(`Students data not found`);
    }

    return studentData;
  }
}
