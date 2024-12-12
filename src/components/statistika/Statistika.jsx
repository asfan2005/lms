import React, { useState, useEffect } from "react";

function Statistika() {
  const [users, setUsers] = useState(0);
  const [lessons, setLessons] = useState(0);
  const [tasks, setTasks] = useState(0);
  const [score, setScore] = useState(0);

  const targetValues = {
    users: 1234,
    lessons: 856,
    tasks: 45,
    score: 87.5
  };

  useEffect(() => {
    // Users counter
    const usersInterval = setInterval(() => {
      setUsers(prev => {
        if (prev < targetValues.users) {
          return prev + Math.ceil((targetValues.users - prev) / 20);
        }
        return targetValues.users;
      });
    }, 50);

    // Lessons counter
    const lessonsInterval = setInterval(() => {
      setLessons(prev => {
        if (prev < targetValues.lessons) {
          return prev + Math.ceil((targetValues.lessons - prev) / 20);
        }
        return targetValues.lessons;
      });
    }, 50);

    // Tasks counter
    const tasksInterval = setInterval(() => {
      setTasks(prev => {
        if (prev < targetValues.tasks) {
          return prev + 1;
        }
        return targetValues.tasks;
      });
    }, 50);

    // Score counter
    const scoreInterval = setInterval(() => {
      setScore(prev => {
        if (prev < targetValues.score) {
          return Number((prev + 0.5).toFixed(1));
        }
        return targetValues.score;
      });
    }, 50);

    // Clear intervals
    return () => {
      clearInterval(usersInterval);
      clearInterval(lessonsInterval);
      clearInterval(tasksInterval);
      clearInterval(scoreInterval);
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Statistika va ko'rsatkichlar</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Jami foydalanuvchilar */}
        <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-600 text-sm mb-2">Jami foydalanuvchilar</h3>
              <div className="text-2xl font-bold mb-2">{users.toLocaleString()}</div>
              <div className="text-green-500 text-sm">
                ↑ 12% o'tgan oyga nisbatan
              </div>
            </div>
            <div className="text-blue-500 text-2xl">👥</div>
          </div>
        </div>

        {/* Tugatilgan mashg'ulotlar */}
        <div className="bg-green-50 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-600 text-sm mb-2">Tugatilgan mashg'ulotlar</h3>
              <div className="text-2xl font-bold mb-2">{lessons.toLocaleString()}</div>
              <div className="text-green-500 text-sm">
                ↑ 8% o'tgan oyga nisbatan
              </div>
            </div>
            <div className="text-green-500 text-2xl">📖</div>
          </div>
        </div>

        {/* Faol topshiriqlar */}
        <div className="bg-purple-50 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-600 text-sm mb-2">Faol topshiriqlar</h3>
              <div className="text-2xl font-bold mb-2">{tasks}</div>
              <div className="text-green-500 text-sm">
                ↑ 5% o'tgan oyga nisbatan
              </div>
            </div>
            <div className="text-purple-500 text-2xl">📝</div>
          </div>
        </div>

        {/* O'rtacha ball */}
        <div className="bg-yellow-50 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-600 text-sm mb-2">O'rtacha ball</h3>
              <div className="text-2xl font-bold mb-2">{score.toFixed(1)}</div>
              <div className="text-green-500 text-sm">
                ↑ 3% o'tgan oyga nisbatan
              </div>
            </div>
            <div className="text-yellow-500 text-2xl">🏆</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistika;