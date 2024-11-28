
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-28 03:00:00", "b": 476.8}, {"a": "2024-11-28 03:05:00", "b": 482.0}, {"a": "2024-11-28 03:10:00", "b": 488.6}, {"a": "2024-11-28 03:15:00", "b": 452.4}, {"a": "2024-11-28 03:20:00", "b": 450.8}, {"a": "2024-11-28 03:25:00", "b": 454.8}, {"a": "2024-11-28 03:30:00", "b": 469.2}, {"a": "2024-11-28 03:35:00", "b": 456.4}, {"a": "2024-11-28 03:40:00", "b": 468.4}, {"a": "2024-11-28 03:45:00", "b": 482.6}, {"a": "2024-11-28 03:50:00", "b": 482.6}, {"a": "2024-11-28 03:55:00", "b": 453.75}, {"a": "2024-11-28 04:00:00", "b": 454.2}, {"a": "2024-11-28 04:05:00", "b": 494.0}, {"a": "2024-11-28 04:10:00", "b": 475.8}, {"a": "2024-11-28 04:15:00", "b": 448.5}, {"a": "2024-11-28 04:20:00", "b": 443.6}, {"a": "2024-11-28 04:25:00", "b": 453.3333333333333}, {"a": "2024-11-28 04:30:00", "b": 435.0}, {"a": "2024-11-28 04:35:00", "b": 434.0}, {"a": "2024-11-28 04:40:00", "b": 449.5}, {"a": "2024-11-28 04:45:00", "b": 477.4}, {"a": "2024-11-28 04:50:00", "b": 485.0}, {"a": "2024-11-28 04:55:00", "b": 476.0}, {"a": "2024-11-28 05:00:00", "b": 477.0}, {"a": "2024-11-28 05:05:00", "b": 531.2}, {"a": "2024-11-28 05:10:00", "b": 481.2}, {"a": "2024-11-28 05:15:00", "b": 508.8}, {"a": "2024-11-28 05:20:00", "b": 504.6}, {"a": "2024-11-28 05:25:00", "b": 506.0}, {"a": "2024-11-28 05:30:00", "b": 509.4}, {"a": "2024-11-28 05:35:00", "b": 521.0}, {"a": "2024-11-28 05:40:00", "b": 486.2}, {"a": "2024-11-28 05:45:00", "b": 455.4}, {"a": "2024-11-28 05:50:00", "b": 478.2}, {"a": "2024-11-28 05:55:00", "b": 495.75}, {"a": "2024-11-28 06:00:00", "b": 545.6}, {"a": "2024-11-28 06:05:00", "b": 483.6}, {"a": "2024-11-28 06:10:00", "b": 469.4}, {"a": "2024-11-28 06:15:00", "b": 474.2}, {"a": "2024-11-28 06:20:00", "b": 489.0}, {"a": "2024-11-28 06:25:00", "b": 541.2}, {"a": "2024-11-28 06:30:00", "b": 490.0}, {"a": "2024-11-28 06:35:00", "b": 473.0}, {"a": "2024-11-28 06:40:00", "b": 479.6}, {"a": "2024-11-28 06:45:00", "b": 558.2}, {"a": "2024-11-28 06:50:00", "b": 528.4}, {"a": "2024-11-28 06:55:00", "b": 475.6}, {"a": "2024-11-28 07:00:00", "b": 488.2}, {"a": "2024-11-28 07:05:00", "b": 494.0}, {"a": "2024-11-28 07:10:00", "b": 512.4}, {"a": "2024-11-28 07:15:00", "b": 496.6}, {"a": "2024-11-28 07:20:00", "b": 544.5}, {"a": "2024-11-28 07:25:00", "b": 531.4}, {"a": "2024-11-28 07:30:00", "b": 491.6}, {"a": "2024-11-28 07:35:00", "b": 487.0}, {"a": "2024-11-28 07:40:00", "b": 539.5}, {"a": "2024-11-28 07:45:00", "b": 507.8}, {"a": "2024-11-28 07:50:00", "b": 501.2}, {"a": "2024-11-28 07:55:00", "b": 491.8}, {"a": "2024-11-28 08:00:00", "b": 575.0}, {"a": "2024-11-28 08:05:00", "b": 600.6}, {"a": "2024-11-28 08:10:00", "b": 611.4}, {"a": "2024-11-28 08:15:00", "b": 597.8}, {"a": "2024-11-28 08:20:00", "b": 623.8}, {"a": "2024-11-28 08:25:00", "b": 587.8}, {"a": "2024-11-28 08:30:00", "b": 544.6}, {"a": "2024-11-28 08:35:00", "b": 485.0}, {"a": "2024-11-28 08:40:00", "b": 479.8}, {"a": "2024-11-28 08:45:00", "b": 508.2}, {"a": "2024-11-28 08:50:00", "b": 492.2}, {"a": "2024-11-28 08:55:00", "b": 501.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    