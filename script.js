
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-26 14:00:00", "b": 414.0}, {"a": "2024-11-26 14:05:00", "b": 487.2}, {"a": "2024-11-26 14:10:00", "b": 417.8}, {"a": "2024-11-26 14:15:00", "b": 425.2}, {"a": "2024-11-26 14:20:00", "b": 503.0}, {"a": "2024-11-26 14:25:00", "b": 408.4}, {"a": "2024-11-26 14:30:00", "b": 515.4}, {"a": "2024-11-26 14:35:00", "b": 523.2}, {"a": "2024-11-26 14:40:00", "b": 404.0}, {"a": "2024-11-26 14:45:00", "b": 405.5}, {"a": "2024-11-26 14:50:00", "b": 406.5}, {"a": "2024-11-26 14:55:00", "b": 526.2}, {"a": "2024-11-26 15:00:00", "b": 447.6}, {"a": "2024-11-26 15:05:00", "b": 504.8}, {"a": "2024-11-26 15:10:00", "b": 431.2}, {"a": "2024-11-26 15:15:00", "b": 407.0}, {"a": "2024-11-26 15:20:00", "b": 406.3333333333333}, {"a": "2024-11-26 15:25:00", "b": 507.6}, {"a": "2024-11-26 15:30:00", "b": 405.6}, {"a": "2024-11-26 15:35:00", "b": 405.75}, {"a": "2024-11-26 15:40:00", "b": 406.5}, {"a": "2024-11-26 15:45:00", "b": 489.6}, {"a": "2024-11-26 15:50:00", "b": 413.6}, {"a": "2024-11-26 15:55:00", "b": 421.8}, {"a": "2024-11-26 16:00:00", "b": 424.75}, {"a": "2024-11-26 16:05:00", "b": 489.0}, {"a": "2024-11-26 16:10:00", "b": 440.2}, {"a": "2024-11-26 16:15:00", "b": 406.0}, {"a": "2024-11-26 16:20:00", "b": 405.75}, {"a": "2024-11-26 16:25:00", "b": 405.5}, {"a": "2024-11-26 16:30:00", "b": 404.5}, {"a": "2024-11-26 16:35:00", "b": 402.2}, {"a": "2024-11-26 16:40:00", "b": 401.5}, {"a": "2024-11-26 16:45:00", "b": 404.0}, {"a": "2024-11-26 16:50:00", "b": 401.5}, {"a": "2024-11-26 16:55:00", "b": 402.3333333333333}, {"a": "2024-11-26 17:00:00", "b": 400.75}, {"a": "2024-11-26 17:05:00", "b": 403.6666666666667}, {"a": "2024-11-26 17:10:00", "b": 411.0}, {"a": "2024-11-26 17:15:00", "b": 404.8}, {"a": "2024-11-26 17:25:00", "b": 454.0}, {"a": "2024-11-26 17:30:00", "b": 416.8}, {"a": "2024-11-26 17:35:00", "b": 439.6}, {"a": "2024-11-26 17:40:00", "b": 475.6}, {"a": "2024-11-26 17:45:00", "b": 441.6}, {"a": "2024-11-26 17:50:00", "b": 418.8}, {"a": "2024-11-26 17:55:00", "b": 417.4}, {"a": "2024-11-26 18:00:00", "b": 508.8}, {"a": "2024-11-26 18:05:00", "b": 423.0}, {"a": "2024-11-26 18:10:00", "b": 496.8}, {"a": "2024-11-26 18:15:00", "b": 510.6}, {"a": "2024-11-26 18:20:00", "b": 507.4}, {"a": "2024-11-26 18:25:00", "b": 510.0}, {"a": "2024-11-26 18:30:00", "b": 561.0}, {"a": "2024-11-26 18:35:00", "b": 481.0}, {"a": "2024-11-26 18:40:00", "b": 488.6}, {"a": "2024-11-26 18:45:00", "b": 506.0}, {"a": "2024-11-26 18:50:00", "b": 512.6}, {"a": "2024-11-26 18:55:00", "b": 578.8}, {"a": "2024-11-26 19:00:00", "b": 551.8}, {"a": "2024-11-26 19:05:00", "b": 536.8}, {"a": "2024-11-26 19:10:00", "b": 457.0}, {"a": "2024-11-26 19:15:00", "b": 458.2}, {"a": "2024-11-26 19:20:00", "b": 528.6}, {"a": "2024-11-26 19:25:00", "b": 526.6}, {"a": "2024-11-26 19:30:00", "b": 524.0}, {"a": "2024-11-26 19:35:00", "b": 555.4}, {"a": "2024-11-26 19:40:00", "b": 523.0}, {"a": "2024-11-26 19:45:00", "b": 522.0}, {"a": "2024-11-26 19:50:00", "b": 496.6}, {"a": "2024-11-26 19:55:00", "b": 509.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    