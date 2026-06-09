# 📚 Mark It - Attendance Management System

A comprehensive web-based attendance marking system designed for educational institutions. Built with React, Node.js, Express, and MongoDB.

## 🎯 Features

### For Administrators
- **Teacher Management** - Create, update, and manage teacher profiles
- **Student Management** - Add and organize students, assign to classes
- **Class Management** - Create and manage classes
- **Subject Management** - Create and manage course subjects
- **Teacher Assignment** - Assign teachers to subjects and classes
- **Student Enrollment** - Enroll students in subject offerings
- **Dashboard** - Real-time statistics and system overview

### For Teachers
- **Course Dashboard** - View all assigned courses
- **Attendance Marking** - Mark student attendance (Present/Absent/Leave)
- **Student Roster** - View enrolled students for each course
- **Profile Management** - Update personal information and qualifications
- **Teaching Statistics** - Track courses and student counts

### For Students
- **Dashboard** - View enrolled courses and attendance status
- **Attendance Records** - Track personal attendance history

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icon components
- **Axios/Fetch** - API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js** - REST API framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin requests

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)
- **npm** or **yarn** - Package managers

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mark-it.git
cd mark-it
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
touch .env

# Add environment variables
echo "PORT=5008
MONGO_URI=mongodb://localhost:27017/attendance_system
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development" > .env

# Start MongoDB (in another terminal)
mongod

# Run the server
npm run dev
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Create .env file (if needed)
touch .env

# Add API URL (optional, default is localhost:5008)
echo "VITE_API_URL=http://localhost:5008" > .env

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
mark-it/
├── backend/
│   ├── models/
│   │   ├── user.js
│   │   ├── teacher.js
│   │   ├── student.js
│   │   ├── admin.js
│   │   ├── class.js
│   │   ├── subject.js
│   │   ├── subjectoffering.js
│   │   ├── enrollment.js
│   │   └── attendance.js
│   ├── controllers/
│   │   ├── authcontroller.js
│   │   ├── teachercontroller.js
│   │   └── admincontroller.js
│   ├── routes/
│   │   ├── authenticate.js
│   │   ├── teacherroutes.js
│   │   └── adminRoutes.js
│   ├── middlewares/
│   │   ├── jwtauth.js
│   │   └── adminauth.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Auth/
│   │   │   │   └── LoginPage.jsx
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── ManageTeachers.jsx
│   │   │   │   ├── ManageStudents.jsx
│   │   │   │   ├── ManageClasses.jsx
│   │   │   │   ├── ManageSubjects.jsx
│   │   │   │   └── ManageOfferings.jsx
│   │   │   └── teacherdashboard/
│   │   │       ├── TeacherDashboard.jsx
│   │   │       ├── TeacherProfile.jsx
│   │   │       └── MarkAttendance.jsx
│   │   ├── services/
│   │   │   ├── adminService.js
│   │   │   ├── teacherservices.js
│   │   │   └── Auth/services.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🔐 Authentication & User Roles

### User Roles:

1. **Admin**
   - Email: `admin@gmail.com`
   - Password: `Admin#1234`
   - Access: Full system management

2. **Teacher**
   - Email: `rajesh@school.com`
   - Password: `Teacher@123`
   - Access: View courses, mark attendance

3. **Student**
   - Email: `aarav@school.com`
   - Password: `Student@123`
   - Access: View courses and attendance

## 🔄 Database Models

### User Model
```javascript
{
  fullName: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  role: "admin" | "teacher" | "student",
  isVerified: Boolean
}
```

### Teacher Model
```javascript
{
  userId: ObjectId (ref: User),
  department: String,
  phone: String,
  experience: Number,
  qualifications: [String]
}
```

### Student Model
```javascript
{
  userId: ObjectId (ref: User),
  regNumber: String,
  branch: String,
  className: String,
  section: String
}
```

### Enrollment Model
```javascript
{
  student: ObjectId (ref: Student),
  subjectOffering: ObjectId (ref: SubjectOffering),
  registrationNumber: String,
  academicYear: String,
  isActive: Boolean
}
```

### Attendance Model
```javascript
{
  subjectOfferingId: ObjectId,
  studentId: ObjectId,
  date: Date,
  status: "PRESENT" | "ABSENT" | "LEAVE",
  markedBy: ObjectId (ref: Teacher)
}
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Admin Routes (Protected)
- `GET /api/admin/teachers` - Get all teachers
- `POST /api/admin/teachers` - Create teacher
- `PUT /api/admin/teachers/:id` - Update teacher
- `DELETE /api/admin/teachers/:id` - Delete teacher

- `GET /api/admin/students` - Get all students
- `POST /api/admin/students` - Create student
- `PUT /api/admin/students/assign-class` - Assign student to class

- `GET /api/admin/classes` - Get all classes
- `POST /api/admin/classes` - Create class

- `GET /api/admin/subjects` - Get all subjects
- `POST /api/admin/subjects` - Create subject

- `GET /api/admin/offerings` - Get all offerings
- `POST /api/admin/offerings` - Create offering
- `DELETE /api/admin/offerings/:id` - Delete offering

- `GET /api/admin/enrollments` - Get all enrollments
- `POST /api/admin/enrollments` - Enroll student
- `POST /api/admin/enrollments/bulk` - Bulk enroll students

### Teacher Routes (Protected)
- `GET /api/teacher/profile` - Get teacher profile
- `GET /api/teacher/offerings` - Get assigned courses
- `GET /api/teacher/attendance/students?offeringId=X` - Get students for course
- `POST /api/teacher/attendance` - Mark attendance

## 🧪 Testing the System

### Step 1: Create Admin User
```bash
POST http://localhost:5008/api/auth/signup
{
  "fullName": "Admin User",
  "email": "admin@gmail.com",
  "phone": "1234567890",
  "password": "Admin#1234",
  "confirmPassword": "Admin#1234",
  "role": "admin"
}
```

### Step 2: Login & Get Token
```bash
POST http://localhost:5008/api/auth/login
{
  "email": "admin@gmail.com",
  "password": "Admin#1234"
}
```

### Step 3: Create Classes, Subjects, Teachers
Use the admin dashboard or API endpoints with the token

### Step 4: Create & Enroll Students
Use the admin dashboard to create students and enroll them

### Step 5: Mark Attendance
Login as teacher and use the mark attendance feature

## 📝 Environment Variables

### Backend (.env)
```
PORT=5008
MONGO_URI=mongodb://localhost:27017/attendance_system
JWT_SECRET=your_secure_secret_key
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5008
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check connection string in .env
- Verify MongoDB is listening on port 27017

### CORS Error
- Check if backend CORS is configured correctly
- Ensure frontend URL matches backend CORS settings

### Authentication Failed
- Clear localStorage: `localStorage.clear()`
- Verify JWT_SECRET is set in .env
- Check token hasn't expired

### API 500 Error
- Check backend console for error messages
- Verify database connection
- Check request payload format

## 🚀 Deployment

### Deploy Backend (Heroku)
```bash
cd backend
heroku login
heroku create your-app-name
git push heroku main
```

### Deploy Frontend (Vercel)
```bash
cd frontend
npm install -g vercel
vercel
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

