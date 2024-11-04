
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-04 06:30:00", "b": 402.5}, {"a": "2024-11-04 06:35:00", "b": 403.5}, {"a": "2024-11-04 06:40:00", "b": 412.6666666666667}, {"a": "2024-11-04 06:45:00", "b": 459.75}, {"a": "2024-11-04 06:50:00", "b": 441.0}, {"a": "2024-11-04 06:55:00", "b": 423.8}, {"a": "2024-11-04 07:00:00", "b": 427.4}, {"a": "2024-11-04 07:05:00", "b": 454.75}, {"a": "2024-11-04 07:10:00", "b": 413.25}, {"a": "2024-11-04 07:15:00", "b": 407.5}, {"a": "2024-11-04 07:20:00", "b": 410.0}, {"a": "2024-11-04 07:25:00", "b": 421.4}, {"a": "2024-11-04 07:30:00", "b": 414.5}, {"a": "2024-11-04 07:35:00", "b": 432.8}, {"a": "2024-11-04 07:40:00", "b": 460.4}, {"a": "2024-11-04 07:45:00", "b": 464.8}, {"a": "2024-11-04 07:50:00", "b": 470.6}, {"a": "2024-11-04 07:55:00", "b": 494.2}, {"a": "2024-11-04 08:00:00", "b": 493.2}, {"a": "2024-11-04 08:05:00", "b": 475.6}, {"a": "2024-11-04 08:10:00", "b": 486.0}, {"a": "2024-11-04 08:15:00", "b": 506.5}, {"a": "2024-11-04 08:20:00", "b": 522.2}, {"a": "2024-11-04 08:25:00", "b": 528.75}, {"a": "2024-11-04 08:30:00", "b": 532.8}, {"a": "2024-11-04 08:35:00", "b": 498.2}, {"a": "2024-11-04 08:40:00", "b": 475.6}, {"a": "2024-11-04 08:45:00", "b": 496.0}, {"a": "2024-11-04 08:50:00", "b": 485.0}, {"a": "2024-11-04 08:55:00", "b": 481.0}, {"a": "2024-11-04 09:00:00", "b": 497.25}, {"a": "2024-11-04 09:05:00", "b": 487.75}, {"a": "2024-11-04 09:10:00", "b": 492.0}, {"a": "2024-11-04 09:15:00", "b": 491.5}, {"a": "2024-11-04 09:20:00", "b": 479.2}, {"a": "2024-11-04 09:25:00", "b": 498.4}, {"a": "2024-11-04 09:30:00", "b": 494.2}, {"a": "2024-11-04 09:35:00", "b": 474.2}, {"a": "2024-11-04 09:40:00", "b": 468.6666666666667}, {"a": "2024-11-04 09:45:00", "b": 470.5}, {"a": "2024-11-04 09:50:00", "b": 471.4}, {"a": "2024-11-04 09:55:00", "b": 466.8}, {"a": "2024-11-04 10:00:00", "b": 451.25}, {"a": "2024-11-04 10:05:00", "b": 453.75}, {"a": "2024-11-04 10:10:00", "b": 450.4}, {"a": "2024-11-04 10:15:00", "b": 447.25}, {"a": "2024-11-04 10:20:00", "b": 457.3333333333333}, {"a": "2024-11-04 10:25:00", "b": 472.6}, {"a": "2024-11-04 10:30:00", "b": 439.6}, {"a": "2024-11-04 10:35:00", "b": 432.75}, {"a": "2024-11-04 10:40:00", "b": 428.4}, {"a": "2024-11-04 10:45:00", "b": 434.6}, {"a": "2024-11-04 10:50:00", "b": 438.25}, {"a": "2024-11-04 10:55:00", "b": 443.0}, {"a": "2024-11-04 11:00:00", "b": 437.5}, {"a": "2024-11-04 11:05:00", "b": 452.25}, {"a": "2024-11-04 11:10:00", "b": 443.2}, {"a": "2024-11-04 11:15:00", "b": 442.75}, {"a": "2024-11-04 11:20:00", "b": 453.0}, {"a": "2024-11-04 11:25:00", "b": 453.6}, {"a": "2024-11-04 11:30:00", "b": 460.6}, {"a": "2024-11-04 11:35:00", "b": 442.6}, {"a": "2024-11-04 11:40:00", "b": 437.75}, {"a": "2024-11-04 11:45:00", "b": 431.25}, {"a": "2024-11-04 11:50:00", "b": 435.8}, {"a": "2024-11-04 11:55:00", "b": 444.4}, {"a": "2024-11-04 12:00:00", "b": 435.8}, {"a": "2024-11-04 12:05:00", "b": 435.8}, {"a": "2024-11-04 12:10:00", "b": 415.6}, {"a": "2024-11-04 12:15:00", "b": 409.6666666666667}, {"a": "2024-11-04 12:20:00", "b": 417.2}, {"a": "2024-11-04 12:25:00", "b": 410.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    