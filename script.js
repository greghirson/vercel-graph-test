
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-11 08:00:00", "b": 482.2}, {"a": "2025-04-11 08:05:00", "b": 468.25}, {"a": "2025-04-11 08:10:00", "b": 464.8}, {"a": "2025-04-11 08:15:00", "b": 471.0}, {"a": "2025-04-11 08:20:00", "b": 467.75}, {"a": "2025-04-11 08:25:00", "b": 464.4}, {"a": "2025-04-11 08:30:00", "b": 467.0}, {"a": "2025-04-11 08:35:00", "b": 472.75}, {"a": "2025-04-11 08:40:00", "b": 474.4}, {"a": "2025-04-11 08:45:00", "b": 471.25}, {"a": "2025-04-11 08:50:00", "b": 467.4}, {"a": "2025-04-11 08:55:00", "b": 464.0}, {"a": "2025-04-11 09:00:00", "b": 459.4}, {"a": "2025-04-11 09:05:00", "b": 480.5}, {"a": "2025-04-11 09:10:00", "b": 470.75}, {"a": "2025-04-11 09:15:00", "b": 462.0}, {"a": "2025-04-11 09:20:00", "b": 486.25}, {"a": "2025-04-11 09:25:00", "b": 477.8}, {"a": "2025-04-11 09:30:00", "b": 458.8}, {"a": "2025-04-11 09:35:00", "b": 447.25}, {"a": "2025-04-11 09:40:00", "b": 451.5}, {"a": "2025-04-11 09:45:00", "b": 455.25}, {"a": "2025-04-11 09:50:00", "b": 458.2}, {"a": "2025-04-11 09:55:00", "b": 465.0}, {"a": "2025-04-11 10:00:00", "b": 473.75}, {"a": "2025-04-11 10:05:00", "b": 467.25}, {"a": "2025-04-11 10:10:00", "b": 457.75}, {"a": "2025-04-11 10:15:00", "b": 456.25}, {"a": "2025-04-11 10:20:00", "b": 444.0}, {"a": "2025-04-11 10:25:00", "b": 447.6}, {"a": "2025-04-11 10:30:00", "b": 444.0}, {"a": "2025-04-11 10:35:00", "b": 439.5}, {"a": "2025-04-11 10:40:00", "b": 448.3333333333333}, {"a": "2025-04-11 10:45:00", "b": 469.8}, {"a": "2025-04-11 10:50:00", "b": 452.8}, {"a": "2025-04-11 10:55:00", "b": 444.25}, {"a": "2025-04-11 11:00:00", "b": 457.0}, {"a": "2025-04-11 11:05:00", "b": 443.75}, {"a": "2025-04-11 11:10:00", "b": 435.6}, {"a": "2025-04-11 11:15:00", "b": 429.6666666666667}, {"a": "2025-04-11 11:20:00", "b": 427.5}, {"a": "2025-04-11 11:25:00", "b": 421.6}, {"a": "2025-04-11 11:30:00", "b": 441.6}, {"a": "2025-04-11 11:35:00", "b": 456.4}, {"a": "2025-04-11 11:40:00", "b": 438.75}, {"a": "2025-04-11 11:45:00", "b": 447.75}, {"a": "2025-04-11 11:50:00", "b": 446.25}, {"a": "2025-04-11 11:55:00", "b": 445.25}, {"a": "2025-04-11 12:00:00", "b": 440.0}, {"a": "2025-04-11 12:05:00", "b": 436.6}, {"a": "2025-04-11 12:10:00", "b": 436.25}, {"a": "2025-04-11 12:15:00", "b": 438.0}, {"a": "2025-04-11 12:20:00", "b": 432.8}, {"a": "2025-04-11 12:25:00", "b": 433.2}, {"a": "2025-04-11 12:30:00", "b": 423.5}, {"a": "2025-04-11 12:35:00", "b": 411.0}, {"a": "2025-04-11 12:40:00", "b": 408.0}, {"a": "2025-04-11 12:45:00", "b": 415.25}, {"a": "2025-04-11 12:50:00", "b": 432.4}, {"a": "2025-04-11 12:55:00", "b": 432.6}, {"a": "2025-04-11 13:00:00", "b": 436.5}, {"a": "2025-04-11 13:05:00", "b": 428.5}, {"a": "2025-04-11 13:10:00", "b": 422.0}, {"a": "2025-04-11 13:15:00", "b": 439.5}, {"a": "2025-04-11 13:20:00", "b": 424.0}, {"a": "2025-04-11 13:25:00", "b": 421.8}, {"a": "2025-04-11 13:30:00", "b": 431.75}, {"a": "2025-04-11 13:35:00", "b": 432.6}, {"a": "2025-04-11 13:40:00", "b": 428.2}, {"a": "2025-04-11 13:45:00", "b": 427.0}, {"a": "2025-04-11 13:50:00", "b": 412.75}, {"a": "2025-04-11 13:55:00", "b": 416.6666666666667}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    