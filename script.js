
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-20 12:00:00", "b": 405.0}, {"a": "2024-11-20 12:05:00", "b": 405.6666666666667}, {"a": "2024-11-20 12:10:00", "b": 404.5}, {"a": "2024-11-20 12:15:00", "b": 406.75}, {"a": "2024-11-20 12:20:00", "b": 415.2}, {"a": "2024-11-20 12:25:00", "b": 408.6666666666667}, {"a": "2024-11-20 12:30:00", "b": 409.75}, {"a": "2024-11-20 12:35:00", "b": 411.25}, {"a": "2024-11-20 12:40:00", "b": 417.8}, {"a": "2024-11-20 12:45:00", "b": 409.5}, {"a": "2024-11-20 12:50:00", "b": 408.5}, {"a": "2024-11-20 12:55:00", "b": 406.0}, {"a": "2024-11-20 13:00:00", "b": 407.0}, {"a": "2024-11-20 13:05:00", "b": 407.3333333333333}, {"a": "2024-11-20 13:10:00", "b": 405.75}, {"a": "2024-11-20 13:15:00", "b": 406.2}, {"a": "2024-11-20 13:20:00", "b": 406.0}, {"a": "2024-11-20 13:25:00", "b": 407.5}, {"a": "2024-11-20 13:30:00", "b": 404.0}, {"a": "2024-11-20 13:35:00", "b": 403.8}, {"a": "2024-11-20 13:40:00", "b": 404.3333333333333}, {"a": "2024-11-20 13:45:00", "b": 404.0}, {"a": "2024-11-20 13:50:00", "b": 401.6666666666667}, {"a": "2024-11-20 13:55:00", "b": 407.4}, {"a": "2024-11-20 14:00:00", "b": 408.5}, {"a": "2024-11-20 14:05:00", "b": 420.4}, {"a": "2024-11-20 14:10:00", "b": 459.8}, {"a": "2024-11-20 14:15:00", "b": 516.4}, {"a": "2024-11-20 14:20:00", "b": 548.8}, {"a": "2024-11-20 14:25:00", "b": 581.6}, {"a": "2024-11-20 14:30:00", "b": 610.6}, {"a": "2024-11-20 14:35:00", "b": 623.5}, {"a": "2024-11-20 14:50:00", "b": 558.5}, {"a": "2024-11-20 14:55:00", "b": 520.0}, {"a": "2024-11-20 15:00:00", "b": 489.5}, {"a": "2024-11-20 15:05:00", "b": 486.8}, {"a": "2024-11-20 15:10:00", "b": 485.4}, {"a": "2024-11-20 15:15:00", "b": 479.4}, {"a": "2024-11-20 15:20:00", "b": 464.0}, {"a": "2024-11-20 15:25:00", "b": 459.6}, {"a": "2024-11-20 15:30:00", "b": 463.8}, {"a": "2024-11-20 15:35:00", "b": 458.6}, {"a": "2024-11-20 15:40:00", "b": 470.4}, {"a": "2024-11-20 15:45:00", "b": 460.4}, {"a": "2024-11-20 15:50:00", "b": 455.0}, {"a": "2024-11-20 15:55:00", "b": 446.0}, {"a": "2024-11-20 16:00:00", "b": 437.2}, {"a": "2024-11-20 16:05:00", "b": 438.2}, {"a": "2024-11-20 16:10:00", "b": 451.75}, {"a": "2024-11-20 16:15:00", "b": 463.2}, {"a": "2024-11-20 16:20:00", "b": 482.2}, {"a": "2024-11-20 16:25:00", "b": 474.5}, {"a": "2024-11-20 16:30:00", "b": 471.75}, {"a": "2024-11-20 16:35:00", "b": 470.0}, {"a": "2024-11-20 16:40:00", "b": 474.6}, {"a": "2024-11-20 16:45:00", "b": 482.4}, {"a": "2024-11-20 16:50:00", "b": 481.6}, {"a": "2024-11-20 16:55:00", "b": 479.0}, {"a": "2024-11-20 17:00:00", "b": 472.0}, {"a": "2024-11-20 17:05:00", "b": 475.0}, {"a": "2024-11-20 17:10:00", "b": 474.0}, {"a": "2024-11-20 17:15:00", "b": 570.8}, {"a": "2024-11-20 17:20:00", "b": 611.4}, {"a": "2024-11-20 17:25:00", "b": 572.6}, {"a": "2024-11-20 17:30:00", "b": 589.5}, {"a": "2024-11-20 17:35:00", "b": 615.2}, {"a": "2024-11-20 17:40:00", "b": 631.25}, {"a": "2024-11-20 17:45:00", "b": 630.6666666666666}, {"a": "2024-11-20 17:50:00", "b": 680.6}, {"a": "2024-11-20 17:55:00", "b": 715.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    