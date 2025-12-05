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
    const { taskId, status, action, comment, commentId } = payload;

    if (!taskId) {
      return NextResponse.json(
        { error: 'taskId is required' },
        { status: 400 }
      );
    }

    // Handle comment deletion
    if (action === 'deleteComment') {
      if (!commentId) {
        return NextResponse.json(
          { error: 'commentId is required for deleteComment action' },
          { status: 400 }
        );
      }

      // TODO: Implement actual comment deletion logic with backend
      // For now, just return success
      return NextResponse.json({ 
        success: true, 
        taskId, 
        commentId 
      });
    }

    // Handle comment addition
    if (action === 'addComment') {
      if (!comment) {
        return NextResponse.json(
          { error: 'comment is required for addComment action' },
          { status: 400 }
        );
      }

      // TODO: Get actual user info from session/auth
      // For now, use values from request
      const authorName = payload.authorName || 'Usuario';
      const newComment = {
        id: `comment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        content: comment,
        authorId: 'current-user-id', // TODO: Get from session
        authorName: authorName,
        createdAt: new Date().toISOString(),
      };

      // TODO: Implement actual comment addition logic with backend
      // For now, just return the comment
      return NextResponse.json({ 
        success: true, 
        taskId, 
        comment: newComment 
      });
    }

    // Handle status update
    if (!status) {
      return NextResponse.json(
        { error: 'status is required for status update' },
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

