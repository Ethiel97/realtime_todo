<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class TaskCreated implements ShouldBroadcastNow
{
	use Dispatchable, InteractsWithSockets, SerializesModels;


	/**
	* Create a new event instance.
    *
	* @param $task
	* @return void
	*/

    public $task;

	public function __construct($task)
	{
		//
		$this->task = $task;
	}


	/**
	* Get the channels the event should broadcast on.
	*
	* @return \Illuminate\Broadcasting\Channel|array
    */

	public function broadcastOn()
    {
		return new Channel('newTask');
	}

	public function broadcastAs(){
		return 'task-created';
	}
}
