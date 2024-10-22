
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-22 03:40:00", "b": 460.8}, {"a": "2024-10-22 03:45:00", "b": 472.6}, {"a": "2024-10-22 03:50:00", "b": 474.2}, {"a": "2024-10-22 03:55:00", "b": 460.6}, {"a": "2024-10-22 04:00:00", "b": 461.0}, {"a": "2024-10-22 04:05:00", "b": 475.6}, {"a": "2024-10-22 04:10:00", "b": 482.2}, {"a": "2024-10-22 04:15:00", "b": 483.6}, {"a": "2024-10-22 04:20:00", "b": 485.6}, {"a": "2024-10-22 04:25:00", "b": 468.5}, {"a": "2024-10-22 04:30:00", "b": 477.0}, {"a": "2024-10-22 04:35:00", "b": 484.8}, {"a": "2024-10-22 04:40:00", "b": 478.4}, {"a": "2024-10-22 04:45:00", "b": 476.25}, {"a": "2024-10-22 04:50:00", "b": 478.5}, {"a": "2024-10-22 04:55:00", "b": 480.75}, {"a": "2024-10-22 05:00:00", "b": 483.8}, {"a": "2024-10-22 05:05:00", "b": 474.2}, {"a": "2024-10-22 05:10:00", "b": 459.8}, {"a": "2024-10-22 05:15:00", "b": 463.0}, {"a": "2024-10-22 05:20:00", "b": 462.8}, {"a": "2024-10-22 05:25:00", "b": 462.4}, {"a": "2024-10-22 05:30:00", "b": 459.6}, {"a": "2024-10-22 05:35:00", "b": 452.0}, {"a": "2024-10-22 05:40:00", "b": 466.0}, {"a": "2024-10-22 05:45:00", "b": 469.75}, {"a": "2024-10-22 05:50:00", "b": 469.75}, {"a": "2024-10-22 05:55:00", "b": 469.2}, {"a": "2024-10-22 06:00:00", "b": 473.4}, {"a": "2024-10-22 06:05:00", "b": 465.6}, {"a": "2024-10-22 06:10:00", "b": 467.6}, {"a": "2024-10-22 06:15:00", "b": 484.0}, {"a": "2024-10-22 06:20:00", "b": 472.4}, {"a": "2024-10-22 06:25:00", "b": 453.4}, {"a": "2024-10-22 06:30:00", "b": 462.8}, {"a": "2024-10-22 06:35:00", "b": 481.0}, {"a": "2024-10-22 06:40:00", "b": 478.0}, {"a": "2024-10-22 06:45:00", "b": 462.75}, {"a": "2024-10-22 06:50:00", "b": 465.4}, {"a": "2024-10-22 06:55:00", "b": 466.0}, {"a": "2024-10-22 07:00:00", "b": 480.5}, {"a": "2024-10-22 07:05:00", "b": 478.75}, {"a": "2024-10-22 07:10:00", "b": 475.2}, {"a": "2024-10-22 07:15:00", "b": 483.0}, {"a": "2024-10-22 07:20:00", "b": 484.75}, {"a": "2024-10-22 07:25:00", "b": 479.8}, {"a": "2024-10-22 07:30:00", "b": 411.5}, {"a": "2024-10-22 07:35:00", "b": 411.0}, {"a": "2024-10-22 07:40:00", "b": 407.5}, {"a": "2024-10-22 07:45:00", "b": 406.0}, {"a": "2024-10-22 07:50:00", "b": 402.0}, {"a": "2024-10-22 07:55:00", "b": 404.3333333333333}, {"a": "2024-10-22 08:00:00", "b": 409.8}, {"a": "2024-10-22 08:05:00", "b": 407.0}, {"a": "2024-10-22 08:10:00", "b": 406.5}, {"a": "2024-10-22 08:15:00", "b": 405.25}, {"a": "2024-10-22 08:20:00", "b": 405.0}, {"a": "2024-10-22 08:25:00", "b": 404.0}, {"a": "2024-10-22 08:30:00", "b": 406.0}, {"a": "2024-10-22 08:35:00", "b": 402.75}, {"a": "2024-10-22 08:40:00", "b": 439.2}, {"a": "2024-10-22 08:45:00", "b": 490.2}, {"a": "2024-10-22 08:50:00", "b": 544.8}, {"a": "2024-10-22 08:55:00", "b": 584.0}, {"a": "2024-10-22 09:00:00", "b": 606.0}, {"a": "2024-10-22 09:05:00", "b": 579.8}, {"a": "2024-10-22 09:10:00", "b": 568.2}, {"a": "2024-10-22 09:15:00", "b": 599.4}, {"a": "2024-10-22 09:20:00", "b": 608.2}, {"a": "2024-10-22 09:25:00", "b": 634.4}, {"a": "2024-10-22 09:30:00", "b": 629.2}, {"a": "2024-10-22 09:35:00", "b": 647.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    