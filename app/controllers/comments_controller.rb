class CommentsController < ApplicationController

  def create
    post = Post.find(params[:id])
    comment = post.comments.create(comments_params)
    respond_with post, comment
  end

  def upvote
    comment = Comment.find(params[:id])
    comment.increment!(:upvote)
    respond_with comment.post, comment
  end

  private

  def comments_params
    permit.require(:comment).permit(:body)
  end
end
