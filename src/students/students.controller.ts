import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Post()
  async createStudent(
    @Res() response,
    @Body() createStudentDto: CreateStudentDto,
  ) {
    try {
      const newStudent =
        await this.studentService.createStudent(createStudentDto);
      return response.status(HttpStatus.CREATED).json({
        message: `Student has been created successfully`,
        newStudent,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: `Error: Student not created!`,
        error: `Bad Request`,
      });
    }
  }

  @Get()
  async getStudent(@Res() response) {
    try {
      const studentData = await this.studentService.getAllStudents();
      return response.status(HttpStatus.OK).json({
        message: `All students data found successfully`,
        studentData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
