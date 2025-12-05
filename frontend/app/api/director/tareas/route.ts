import { NextResponse } from 'next/server';
import directorTareas from '@/data/director/tareas.json';
import { TareasResponse } from '@/types/tareas';

export async function GET() {
  try {
    const data = directorTareas as TareasResponse;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch tasks' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const payload = await request.json();
    const { taskId, status } = payload;

    if (!taskId || !status) {
      return NextResponse.json(
        { error: 'taskId and status are required' },
        { status: 400 }
      );
    }

    // TODO: Implement actual status update logic with backend
    // For now, just return success
    return NextResponse.json({ success: true, taskId, status });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    );
  }
}

